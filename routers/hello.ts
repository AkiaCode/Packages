const hello = () => {
    return new Response(JSON.stringify({
        message: "Welcome to Packages API!",
        endpoints: [
            {
                name: "Hello",
                description: "Returns a message",
                path: "/",
            },
            {
                name: "Information",
                description: "Returns information about the package",
                path: "/info/:packageName",
                params: [{
                    lang: "Available langs: deno, nodejs, elixir, rust",
                }]
            },
            {
                name: "Search",
                description: "Returns a list of packages",
                path: "/search/:packageName",
                params: [{
                    lang: "Available langs: deno, nodejs, elixir, rust",
                }]
            }
        ]
    }), {
        status: 200,
        headers: { "content-type": "application/json" },
    });
}

export default hello;