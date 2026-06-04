const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://vvazzmoplwfubfhllnwf.supabase.co';
// Service role key — never expose this in frontend code
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
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
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };
    if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };

    // FIX 4: Guard against missing SERVICE_KEY in Netlify settings
    if (!SERVICE_KEY) {
        return { 
            statusCode: 500, 
            headers, 
            body: JSON.stringify({ error: 'Server configuration error. Please contact support.' }) 
        };
    }

    let body;
    try { body = JSON.parse(event.body); }
    catch { return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) }; }

    const { action, email, password, full_name, user_id, calling_user_token } = body;

    // Verify the calling user is an admin
    const anonClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data: { user }, error: authError } = await anonClient.auth.getUser(calling_user_token);

    // FIX 3: Load admin list from database
    const adminEmails = await getAdminEmails();
    if (authError || !user || !adminEmails.includes(user.email.toLowerCase())) {
        return { statusCode: 403, headers, body: JSON.stringify({ error: 'Access denied' }) };
    }

    // Use service role client for admin operations
    const admin = createClient(SUPABASE_URL, SERVICE_KEY, {
        auth: { autoRefreshToken: false, persistSession: false }
    });

    try {
        if (action === 'create') {
            const { data, error } = await admin.auth.admin.createUser({
                email,
                password,
                email_confirm: true,
                user_metadata: { full_name: full_name || '' }
            });
            if (error) return { statusCode: 400, headers, body: JSON.stringify({ error: error.message }) };

            // Insert profile row
            await admin.from('profiles').upsert({
                id: data.user.id,
                email,
                full_name: full_name || ''
            }, { onConflict: 'id' });

            return { statusCode: 200, headers, body: JSON.stringify({ success: true, user: data.user }) };
        }

        if (action === 'delete') {
            const { error } = await admin.auth.admin.deleteUser(user_id);
            if (error) return { statusCode: 400, headers, body: JSON.stringify({ error: error.message }) };
            return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
        }

        if (action === 'reset_password') {
            const { error } = await admin.auth.admin.updateUserById(user_id, { password });
            if (error) return { statusCode: 400, headers, body: JSON.stringify({ error: error.message }) };
            return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
        }

        if (action === 'list') {
            const { data, error } = await admin.auth.admin.listUsers({ perPage: 1000 });
            if (error) return { statusCode: 400, headers, body: JSON.stringify({ error: error.message }) };
            return { statusCode: 200, headers, body: JSON.stringify({ users: data.users }) };
        }

        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Unknown action' }) };

    } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal server error' }) };
    }
};
