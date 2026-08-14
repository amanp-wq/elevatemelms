const nodemailer = require('nodemailer');

const SITE_URL = process.env.SITE_URL || 'https://elevateme.pro';

// Alerts go to Google Chat instead of email — if Gmail SMTP itself is broken,
// an email-based alert would never arrive. Failure here is intentionally
// swallowed so a broken webhook never blocks the caller's real error handling.
async function alertEmailFailure(context, error) {
    const webhookUrl = process.env.GOOGLE_CHAT_WEBHOOK_URL;
    if (!webhookUrl) return;
    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: `🚨 ElevateMe welcome email failed\nContext: ${context}\nError: ${error && error.message ? error.message : error}`
            })
        });
    } catch (e) {
        console.error('Failed to post Google Chat alert:', e.message);
    }
}

function getTransport() {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return null;
    }
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
}

async function sendWelcomeEmail({ email, password, full_name }) {
    const transport = getTransport();
    if (!transport) {
        console.warn('Mailer: SMTP env vars not set, skipping welcome email');
        await alertEmailFailure(`welcome email to ${email}`, 'SMTP env vars not configured');
        return { sent: false, reason: 'smtp_not_configured' };
    }

    const loginUrl = SITE_URL.replace(/\/$/, '') + '/login.html';
    const name = full_name || 'there';

    const html = `
        <div style="font-family:'Nunito Sans',Arial,sans-serif;max-width:480px;margin:0 auto;padding:2rem;color:#0a1a0f;">
            <h2 style="color:#0a1a0f;">Welcome to ElevateMe, ${name}!</h2>
            <p>Your account has been created. Here are your login details:</p>
            <table style="width:100%;margin:1rem 0;border-collapse:collapse;">
                <tr><td style="padding:0.4rem 0;font-weight:700;">Email</td><td style="padding:0.4rem 0;">${email}</td></tr>
                <tr><td style="padding:0.4rem 0;font-weight:700;">Password</td><td style="padding:0.4rem 0;">${password}</td></tr>
            </table>
            <p style="margin:1.5rem 0;">
                <a href="${loginUrl}" style="background:#488a6d;color:#fff;padding:0.75rem 1.5rem;border-radius:10px;text-decoration:none;font-weight:700;">Sign In</a>
            </p>
            <p style="font-size:0.85rem;color:#4a6b55;">We recommend changing your password after your first login.</p>
        </div>
    `;

    try {
        await transport.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: email,
            subject: 'Welcome to ElevateMe — Access Your Learning Portal',
            html: html
        });
    } catch (error) {
        await alertEmailFailure(`welcome email to ${email}`, error);
        throw error; // preserve existing behavior: caller still sees/logs the failure
    }

    return { sent: true };
}

module.exports = { sendWelcomeEmail };
