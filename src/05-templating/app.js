const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

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
