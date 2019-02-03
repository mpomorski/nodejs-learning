// ES5 constructor function
// module.exports = function Product() {};

const products = [];
// esnext gen class
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
