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
    
    // Rehost the raw response text
    return new Response(textData, {
      headers: {
        "content-type": "text/plain",
      },
    });
  } catch (error) {
    return new Response("Failed to fetch the JSON data", { status: 500 });
  }
}
