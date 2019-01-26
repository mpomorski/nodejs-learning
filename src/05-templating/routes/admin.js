const express = require('express');
const path = require('path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// when different HTTP methods are used, it is an exact match on path
router.post('/add-product', (req, res, next) => {
  console.log('req body: ', req.body);
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
