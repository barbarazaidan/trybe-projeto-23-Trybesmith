import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import geraToken from '../utils/geraToken';
import { Token } from '../types/Token';
  
async function doLogin(username: string, password: string): Promise<ServiceResponse<Token>> {
  const user = await UserModel.findOne({ where: { username } });
  if (!user) {
    return { status: 401, data: { message: 'Username or password invalid' } };    
  }

  // o bcrypt.compareSync(password, user.dataValues.password) compara a senha recebida no body com a senha criptografada do banco de dados
  if (!bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };    
  }
 
  const token = geraToken(user.dataValues.id, user.dataValues.username);

  return {
    status: 200,
    data: { token },
  };
}
export default {
  doLogin,
};