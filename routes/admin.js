import path from 'path';
import express from 'express';

const router = express.Router();

router.use('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/product', (req, res) => {
  console.log(req.body.title);
  res.redirect('/');
  console.log('hello from product route');
});

export default router;
