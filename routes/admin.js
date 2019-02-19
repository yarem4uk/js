// import path from 'path';
import express from 'express';
// import rootDir from '../util/path';


const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', { pageTitle: 'Add Products', path: '/admin/add-product' });
});

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  console.log(products, 'admin routes');
  res.redirect('/');
});

export { router, products };
