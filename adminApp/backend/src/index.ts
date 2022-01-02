import http from 'http';
import Controller from './Controller';

const PORT = process.env.PORT || 8080;

async function setupServer() {
  const server = http.createServer((req, res) => {

    console.log(req.method === 'POST')

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Max-Age', 2592000);
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    let body = '';
    req.on('data', (chunk) => body += chunk);
    req.on('end', () => {
      if (req.headers['content-type'] === 'application/json') body = JSON.parse(body);
      const request = Object.assign(req, { body });
      Controller.handle(request, res);
    });
  });

  await import('./controllers');

  server.listen(8080, () => {
    console.log('Server is running on port ' + PORT);
  });
}

setupServer();
