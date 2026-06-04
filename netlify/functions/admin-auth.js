const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://vvazzmoplwfubfhllnwf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2YXp6bW9wbHdmdWJmaGxsbndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwOTI1NjMsImV4cCI6MjA5MTY2ODU2M30.pZYjPTsi5Km5OpI02MQMyPEUW9eTLaCJt8cDkFzH05o';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

const ALLOWED_ORIGINS = [
    'https://elevatemelms.netlify.app',
    'https://elevateme.pro',
    'https://lms.elevateme.pro',
    'http://localhost:8888',
    'http://localhost:3000'
];

exports.handler = async (event) => {
    var origin = event.headers.origin || '';
    var allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : 'https://elevatemelms.netlify.app';

    var corsHeaders = {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Headers': 'Content-Type, x-admin-token',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: corsHeaders, body: '' };
    }

    try {
        var token = event.headers['x-admin-token'];
        if (!token) {
            return { statusCode: 401, headers: corsHeaders, body: JSON.stringify({ error: 'Unauthorized: no token provided' }) };
        }

        // Verify the user token using anon key
        var anonClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        var userResult = await anonClient.auth.getUser(token);
        var user = userResult.data && userResult.data.user ? userResult.data.user : null;
        var authError = userResult.error;

        if (authError || !user) {
            return { statusCode: 403, headers: corsHeaders, body: JSON.stringify({ error: 'Access denied: invalid token' }) };
        }

        // Use SERVICE ROLE KEY to query admins table (bypasses RLS)
        if (!SERVICE_KEY) {
            return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Server misconfiguration: missing service key' }) };
        }

        var adminClient = createClient(SUPABASE_URL, SERVICE_KEY, {
            auth: { autoRefreshToken: false, persistSession: false }
        });

        var adminResult = await adminClient.from('admins').select('email');
        var adminRows = adminResult.data || [];
        var adminDbError = adminResult.error;

        if (adminDbError) {
            return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Database error: ' + adminDbError.message }) };
        }

        var adminEmails = adminRows.map(function(r) { return r.email.toLowerCase(); });
        var userEmail = user.email.toLowerCase();

        if (adminEmails.indexOf(userEmail) === -1) {
            return { statusCode: 403, headers: corsHeaders, body: JSON.stringify({ error: 'Access denied: not an admin' }) };
        }

        return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ ok: true }) };

    } catch (err) {
        return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Internal server error: ' + err.message }) };
    }
};
