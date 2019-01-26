const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader('Content-Type', 'text/plain');
  res.write('All good');
  res.end();
});

server.listen(3000);
//   process.exit(); hard exits the node.js event loop
