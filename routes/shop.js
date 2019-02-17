// import path from 'path';
import express from 'express';
// import rootDir from '../util/path';
import * as adminData from './admin';

const router = express.Router();

router.get('/', (req, res) => {
  const [products] = adminData.products;
  console.log(products, 'shop product');
  res.render('shop', { products, title: 'hello' });
});

export default router;
