// Local-only response fixture. No submission is forwarded to Formspree.
import http from 'node:http';
let submissions = 0;
http.createServer(async (request, response) => {
  const url = new URL(request.url, 'http://127.0.0.1:4322');
  if (url.pathname.startsWith('/fixture-submit/')) {
    submissions++;
    for await (const chunk of request) { /* Consume the local test body. */ }
    const mode = url.pathname.split('/').pop();
    console.log(JSON.stringify({ mode, submissions }));
    if (mode === 'timeout') await new Promise(resolve => setTimeout(resolve, 25000));
    if (mode === 'slow') await new Promise(resolve => setTimeout(resolve, 4000));
    response.writeHead(mode === 'error' ? 422 : 200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(mode === 'error' ? { errors: [{ message: 'Simulated refusal' }] } : { ok: true }));
    return;
  }
  try {
    const upstream = await fetch(`http://127.0.0.1:4323${url.pathname}${url.search}`);
    const headers = { 'Content-Type': upstream.headers.get('content-type') || 'text/plain' };
    response.writeHead(upstream.status, headers);
    if (url.pathname.endsWith('/contact') || url.pathname.endsWith('/contact/')) {
      let html = (await upstream.text()).replace('https://formspree.io/f/xgorjwkw', `/fixture-submit/${url.searchParams.get('mode') || 'error'}`);
      if (url.searchParams.get('mode') === 'storage') {
        html = html.replace('</head>', `<script>Object.defineProperty(window, 'sessionStorage', { get() { throw new Error('Simulated storage refusal'); } });</script></head>`);
      }
      response.end(html);
    } else response.end(Buffer.from(await upstream.arrayBuffer()));
  } catch {
    response.writeHead(502);
    response.end('Local Astro server unavailable');
  }
}).listen(4322, '127.0.0.1', () => console.log('Local response fixture http://127.0.0.1:4322/bconseil/contact?mode=error'));
