const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://vvazzmoplwfubfhllnwf.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2YXp6bW9wbHdmdWJmaGxsbndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwOTI1NjMsImV4cCI6MjA5MTY2ODU2M30.pZYjPTsi5Km5OpI02MQMyPEUW9eTLaCJt8cDkFzH05o';

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
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: corsHeaders, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    if (!SERVICE_KEY) {
        return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Server configuration error: missing service key' }) };
    }

    try {
        var body;
        try { body = JSON.parse(event.body); }
        catch (e) { return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid JSON' }) }; }

        var action = body.action;
        var email = body.email;
        var password = body.password;
        var full_name = body.full_name;
        var user_id = body.user_id;
        var calling_user_token = body.calling_user_token;

        // Verify the calling user is an admin using anon key
        var anonClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        var userResult = await anonClient.auth.getUser(calling_user_token);
        var user = userResult.data && userResult.data.user ? userResult.data.user : null;
        var authError = userResult.error;

        if (authError || !user) {
            return { statusCode: 403, headers: corsHeaders, body: JSON.stringify({ error: 'Access denied: invalid token' }) };
        }

        // Use SERVICE ROLE KEY to query admins table (bypasses RLS)
        var adminCheckClient = createClient(SUPABASE_URL, SERVICE_KEY, {
            auth: { autoRefreshToken: false, persistSession: false }
        });

        var adminResult = await adminCheckClient.from('admins').select('email');
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

        // Use service role client for admin operations
        var admin = createClient(SUPABASE_URL, SERVICE_KEY, {
            auth: { autoRefreshToken: false, persistSession: false }
        });

        if (action === 'create') {
            var createResult = await admin.auth.admin.createUser({
                email: email,
                password: password,
                email_confirm: true,
                user_metadata: { full_name: full_name || '' }
            });
            if (createResult.error) {
                return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: createResult.error.message }) };
            }

            await admin.from('profiles').upsert({
                id: createResult.data.user.id,
                email: email,
                full_name: full_name || ''
            }, { onConflict: 'id' });

            return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ success: true, user: createResult.data.user }) };
        }

        if (action === 'delete') {
            var deleteResult = await admin.auth.admin.deleteUser(user_id);
            if (deleteResult.error) {
                return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: deleteResult.error.message }) };
            }
            return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ success: true }) };
        }

        if (action === 'reset_password') {
            var resetResult = await admin.auth.admin.updateUserById(user_id, { password: password });
            if (resetResult.error) {
                return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: resetResult.error.message }) };
            }
            return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ success: true }) };
        }

        if (action === 'list') {
            var listResult = await admin.auth.admin.listUsers({ perPage: 1000 });
            if (listResult.error) {
                return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: listResult.error.message }) };
            }
            return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ users: listResult.data.users }) };
        }

        return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Unknown action' }) };

    } catch (err) {
        return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Internal server error: ' + err.message }) };
    }
};
