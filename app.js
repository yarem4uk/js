import path from 'path';
import Express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// import * as adminData from './routes/admin';
import adminRoutes from './routes/admin';

import shopRoutes from './routes/shop';
import * as errorController from './controllers/error';

const app = new Express();

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/assets', Express.static(path.join(__dirname, 'public')));

app.use(errorController.get404);

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
