const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add product</button></form>'
  );
});

// when different HTTP methods are used, it is an exact match on path
router.post('/product', (req, res, next) => {
  console.log('req body: ', req.body);
  res.redirect('/');
});

module.exports = router;
