import path from 'path';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  // res.render('../views/shop');
});

export default router;
