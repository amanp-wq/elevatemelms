const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://vvazzmoplwfubfhllnwf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2YXp6bW9wbHdmdWJmaGxsbndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwOTI1NjMsImV4cCI6MjA5MTY2ODU2M30.pZYjPTsi5Km5OpI02MQMyPEUW9eTLaCJt8cDkFzH05o';

const ALLOWED_ORIGINS = [
    'https://elevatemelms.netlify.app',
    'https://elevateme.pro',
    'https://lms.elevateme.pro',
    'http://localhost:8888',
    'http://localhost:3000'
];

exports.handler = async (event) => {
    const origin = event.headers.origin || '';
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : 'https://elevatemelms.netlify.app';

    const headers = {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Headers': 'Content-Type, x-admin-token',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const token = event.headers['x-admin-token'];
        if (!token) {
            return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };
        }

        const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        const { data: { user }, error } = await sb.auth.getUser(token);

        if (error || !user) {
            return { statusCode: 403, headers, body: JSON.stringify({ error: 'Access denied' }) };
        }

        // Check if user is admin
        const { data: adminRows, error: adminError } = await sb.from('admins').select('email');
        if (adminError) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Database error' }) };
        }

        const adminEmails = (adminRows || []).map(r => r.email.toLowerCase());
        if (!adminEmails.includes(user.email.toLowerCase())) {
            return { statusCode: 403, headers, body: JSON.stringify({ error: 'Access denied' }) };
        }

        return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };

    } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal server error: ' + err.message }) };
    }
};
