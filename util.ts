export const request = (url: string) => {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
        },
    })
    .then((response: any) => response.json())
    .then((data: any) => {
            return data;
    });
}


export const ResponseJSON = (json: any) => {
    return new Response(JSON.stringify({ version: '1', data: json }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}