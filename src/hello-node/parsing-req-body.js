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
    const body = [];
    // event fired whenever a new chunk of req is ready to be read
    req.on('data', chunk => {
      console.log('New chunk arrived...');
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      console.log('Done parsing incoming data.');
      const parsedBody = Buffer.concat(body).toString();
      console.log('Body: ', parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.writeHead(302, { Location: '/' });
    console.log('Redirecting...');
    return res.end();
  }
});

const port = 3000;
server.listen(port);
console.log(`Listening on port ${port}...`);
