import { Request, Response } from 'express';
import orderService from '../service/Order';

async function getOrders(req: Request, res: Response): Promise<void> {
  const serviceResponse = await orderService.getOrders();
  res.status(serviceResponse.status).json(serviceResponse.data);
}

export default {
  getOrders,
};