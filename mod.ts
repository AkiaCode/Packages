import helloRouter from './routers/hello.ts'
import searchRouter from './routers/search.ts'
import infoRouter from './routers/info.ts'


const handleRequest = (event: any) => {
  const { pathname, search } = new URL(event.request.url);
  const searchParams = new URLSearchParams(search);

  const ip = event.request.headers.get("x-forwarded-for");

  console.log(`${ip}: ${event.request.method} ${event.request.url}`)


  if (pathname === '/') {
    return helloRouter();
  } else if (pathname.startsWith('/search')) {
    return searchRouter(pathname.split('/')[2], searchParams);
  } else if (pathname.startsWith('/info')) {
    return infoRouter(pathname.split('/')[2], searchParams);
  }

  return new Response(null, { status: 404 });
}


addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});
