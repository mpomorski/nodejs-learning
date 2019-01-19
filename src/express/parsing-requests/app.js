const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add product</button></form>'
  );
});

// can use different HTTP methods
app.post('/product', (req, res, next) => {
  // undefined, by default not paresed
  console.log('req body: ', req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Root</h1>');
});

app.listen(3000);
