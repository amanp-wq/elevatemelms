const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://vvazzmoplwfubfhllnwf.supabase.co';
// This key is safe to include here as it is a server-side function
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2YXp6bW9wbHdmdWJmaGxsbndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwOTI1NjMsImV4cCI6MjA5MTY2ODU2M30.pZYjPTsi5Km5OpI02MQMyPEUW9eTLaCJt8cDkFzH05o';
const ADMIN_EMAILS = ['support@elevateme.pro', 'divina.r@elevateme.pro', 'aman.p@elevateme.pro', 'nitti.v@elevateme.pro'];

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, x-admin-token',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

    const token = event.headers['x-admin-token'];
    if (!token) return { statusCode: 401, headers, body: JSON.stringify({ error: 'Unauthorized' }) };

    const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data: { user }, error } = await sb.auth.getUser(token);

    if (error || !user || !ADMIN_EMAILS.includes(user.email.toLowerCase())) {
        return { statusCode: 403, headers, body: JSON.stringify({ error: 'Forbidden' }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
};
