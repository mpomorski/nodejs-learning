const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));

// order still matters
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // send needs to be the last one
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);