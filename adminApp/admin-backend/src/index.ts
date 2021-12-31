import http from 'http';
import Controller from './Controller';

const PORT = process.env.PORT || 8080;

async function setupServer() {
    const server = http.createServer((req, res) => {
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
