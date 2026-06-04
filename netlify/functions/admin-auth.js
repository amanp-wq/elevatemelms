const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://vvazzmoplwfubfhllnwf.supabase.co';
// This key is safe to include here as it is a server-side function
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2YXp6bW9wbHdmdWJmaGxsbndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwOTI1NjMsImV4cCI6MjA5MTY2ODU2M30.pZYjPTsi5Km5OpI02MQMyPEUW9eTLaCJt8cDkFzH05o';
// SECURITY: Admin emails loaded from Supabase only — never hardcoded in code
async function getAdminEmails() {
    try {
        const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        const { data, error } = await sb.from('admins').select('email');
        if (data && data.length > 0) {
            return data.map(r => r.email.toLowerCase());
        }
    } catch (e) {
        // SECURITY: Fail-secure — if DB query fails, return empty (no admin access)
        console.warn('Could not load admins from database.', e);
        return [];
    }
}

exports.handler = async (event) => {
    // SECURITY: Only allow requests from your own domains (not wildcard *)
    const origin = event.headers.origin || '';
    const isAllowed = origin === 'https://elevatemelms.netlify.app'
        || origin === 'https://elevateme.pro'
        || origin === 'https://lms.elevateme.pro'
        || origin === 'http://localhost:8888'
        || origin === 'http://localhost:3000';
    const allowedOrigin = isAllowed ? origin : 'https://elevatemelms.netlify.app';

    const headers = {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Headers': 'Content-Type, x-admin-token',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

    const token = event.headers['x-admin-token'];
    if (!token) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };

    const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data: { user }, error } = await sb.auth.getUser(token);

    const adminEmails = await getAdminEmails();

    if (error || !user || !adminEmails.includes(user.email.toLowerCase())) {
        return { statusCode: 403, headers, body: JSON.stringify({ error: 'Access denied' }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
};
