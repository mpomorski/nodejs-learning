const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  const products = adminData.products;
  // uses the registered templating engine, no need to add ext as well
  // in handlebars we can't run any logic, just simple properties
  // keeps templates lean
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
    // understood by hbs, will not use default layout
    // layout: false
  });
});

module.exports = router;
