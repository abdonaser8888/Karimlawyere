export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Intercept GraphQL calls
  if (url.pathname.includes('graphql')) {
    return new Response(JSON.stringify({ data: {} }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': '*'
      }
    });
  }

  // Intercept telemetry / tracking calls
  if (url.pathname.includes('monorail') || url.pathname.includes('otlp') || url.pathname.includes('analytics')) {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      }
    });
  }

  return context.next();
}
