const hello = () => {
    return new Response(JSON.stringify({ text: "Welcome to Packages API!" }), {
        status: 200,
        headers: { "content-type": "application/json" },
    });
}

export default hello;