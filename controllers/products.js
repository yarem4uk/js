const products = [];

// admin
const getAddProduct = (req, res) => {
  res.render('add-product', {
    pageTitle: 'Add Products',
    path: '/admin/add-product',
  });
};

// admin
const postAddProduct = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

// shop
const getProducts = (req, res) => {
  res.render('shop', {
    products,
    pageTitle: 'Shop',
    path: '/',
  });
};

export { getAddProduct, postAddProduct, getProducts };
