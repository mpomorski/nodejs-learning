const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// when different HTTP methods are used, it is an exact match on path
router.post('/add-product', (req, res, next) => {
  console.log('req body: ', req.body);
  res.redirect('/');
});

module.exports = router;
