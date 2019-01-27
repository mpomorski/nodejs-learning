const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  const products = adminData.products;
  // uses the registered templating engine, no need to add ext as well
  res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;
