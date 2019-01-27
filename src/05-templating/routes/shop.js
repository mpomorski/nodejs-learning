const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  // uses the registered templating engine, no need to add ext as well
  res.render('shop');
});

module.exports = router;
