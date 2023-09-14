import { Router } from 'express';
import OrderController from '../controller/Order';

const orderRouter = Router();

orderRouter.get('/', OrderController.getOrders);

export default orderRouter;