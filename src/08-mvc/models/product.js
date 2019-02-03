// ES5 constructor function
// module.exports = function Product() {};

const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const productsFile = path.join(rootDir, 'data', 'products.json');
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(productsFile, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(productsFile, JSON.stringify(products), err => {
        if (err) {
          console.log('Unable to save products', err);
        }
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(productsFile, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
