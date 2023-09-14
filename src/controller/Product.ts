import { Request, Response } from 'express';
import productService from '../service/Product';

async function newProduct(req: Request, res: Response): Promise<void> {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productService.newProduct({ name, price, orderId });
  res.status(serviceResponse.status).json(serviceResponse.data);
}

async function getProducts(req: Request, res: Response): Promise<void> {
  const serviceResponse = await productService.getProducts();
  res.status(serviceResponse.status).json(serviceResponse.data);
}

export default {
  newProduct,
  getProducts,
};