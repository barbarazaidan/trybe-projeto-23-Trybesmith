import { Router } from 'express';
import ProductController from '../controller/Product';

const productRouter = Router();

productRouter.post('/', ProductController.newProduct);
productRouter.get('/', ProductController.getProducts);

export default productRouter;