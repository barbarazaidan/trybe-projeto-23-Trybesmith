import { NextFunction, Request, Response } from 'express';

async function validaInputLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  if (!username || typeof username !== 'string') {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  if (!password || typeof password !== 'string') {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  next();
}

export default validaInputLogin;