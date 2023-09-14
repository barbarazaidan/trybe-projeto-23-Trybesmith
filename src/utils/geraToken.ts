import * as jwt from 'jsonwebtoken';

const geraToken = (id: number, username:string) : string => {
  const payload = { id, username };
  const segredoToken = process.env.JWT_SECRET || 'segredo';
  const token = jwt.sign(payload, segredoToken);

  return token;
};

export default geraToken;