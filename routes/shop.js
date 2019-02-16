import path from 'path';
import express from 'express';
import rootDir from '../util/path';


const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // res.render('../views/shop');
});

export default router;
