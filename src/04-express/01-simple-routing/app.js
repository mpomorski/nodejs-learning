const express = require('express');

const app = express();

// some common middlware
app.use('/', (req, res, next) => {
  console.log('Middleware I...');
  next();
});

app.use('/add-product', (req, res, next) => {
  res.send('<h1>Add product</h1>');
});

// path starts with, not exact match, carefull with order
app.use('/', (req, res, next) => {
  res.send('<h1>Root</h1>');
});

app.listen(3000);
