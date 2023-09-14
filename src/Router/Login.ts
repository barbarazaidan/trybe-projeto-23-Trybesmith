import { Router } from 'express';
import UserController from '../controller/User';
import validaInputLogin from '../middlewares/validaInputLogin';

const loginRouter = Router();

loginRouter.post('/', validaInputLogin, UserController.doLogin);

export default loginRouter;