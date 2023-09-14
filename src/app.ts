import express from 'express';
import productRouter from './Router/Product';
import orderRouter from './Router/Orders';
import loginRouter from './Router/Login';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;