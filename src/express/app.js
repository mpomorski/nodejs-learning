// const http = require('http');
const express = require('express');

// happens to be a valid request listener
const app = express();

app.use((req, res, next) => {
  console.log('In the middleware I...');
  next();
});

app.use((req, res, next) => {
  console.log('In the middleware II...');
  // sets text/html content-type for string input
  res.send('<h1>Hello from express!</h1>');
});

// express doesn't send default response

app.listen(3000);

// equivalent of:
// const server = http.createServer(app);
// server.listen(3000);
