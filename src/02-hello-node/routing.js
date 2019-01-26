const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    console.log('Received message');
    res.writeHead(302, { Location: '/' });
    // equvalent to
    // res.statusCode = 302;
    // res.setHeader('Location', '/');
    return res.end();
  }
});

const port = 3000;
server.listen(port);
console.log(`Listening on port ${port}...`);
