import Product from '../models/product';

// admin
const getAddProduct = (req, res) => {
  res.render('add-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
  });
};

// admin
const postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

// shop
const getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.render('shop', {
    products,
    pageTitle: 'Shop',
    path: '/',
  });
};

export { getAddProduct, postAddProduct, getProducts };
