import { Request, Response } from 'express';
import UserService from '../service/User';

async function doLogin(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;
  const serviceResponse = await UserService.doLogin(username, password);
  res.status(serviceResponse.status).json(serviceResponse.data);
}

export default {
  doLogin,
};