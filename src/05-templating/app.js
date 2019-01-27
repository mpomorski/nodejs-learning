const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// pug is supported out of the box once installed
app.set('view engine', 'pug');
// this is the default
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));
// everything in that directory will have readonly access
app.use(express.static(path.join(__dirname, 'public')));

// order still matters
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // send needs to be the last one
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
