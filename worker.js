addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // The URL to fetch the JSON from
  const url = "http://api.steam-gamers.net:27019/servers";
  
  try {
    // Fetch the data from the external URL
    const response = await fetch(url);
    
    // Get the raw text response
    const textData = await response.text();
    
    // Log the raw response text
    console.log(textData);

    // Rehost the raw response text with CORS and security headers
    return new Response(textData, {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",  // Allow all origins (you can change this to specific origins)
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",  // Allow these HTTP methods
        "Access-Control-Allow-Headers": "Content-Type",  // Allow Content-Type header
        "X-Content-Type-Options": "nosniff",  // Prevent MIME type sniffing
        "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",  // Enforce HTTPS
        "Content-Security-Policy": "default-src 'none'; script-src 'self'; connect-src 'self';",  // Basic CSP
        "X-Frame-Options": "DENY",  // Prevents clickjacking
        "X-XSS-Protection": "1; mode=block"  // Cross-site scripting protection
      },
    });
  } catch (error) {
    return new Response("Failed to fetch the JSON data", { status: 500 });
  }
}
