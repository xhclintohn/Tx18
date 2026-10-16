const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const ANIMATION = process.env.ANIMATION !== 'false';
const server = http.createServer((req, res) => {
if (req.url === '/' || req.url === '/index.html') {
let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
html = html.replace('var ANIMATION = true;', 'var ANIMATION = ' + ANIMATION + ';');
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(html);
} else {
res.writeHead(404);
res.end();
}
});
server.listen(PORT);