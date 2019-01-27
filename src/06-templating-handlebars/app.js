const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHandlebars = require('express-handlebars');
const app = express();

// registers templating engine, name has to match the extension of template files
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
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
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
