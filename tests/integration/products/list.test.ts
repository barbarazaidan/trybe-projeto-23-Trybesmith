import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import listaDeProdutosFindAll from '../../mocks/listaDeProdutos';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Verifica se uma lista de produtos é retornada', async function () {
    sinon.stub(ProductModel, 'findAll').resolves([
      ProductModel.build({ "id": 1, "name": "Excalibur", "price": "10 peças de ouro", "orderId": 1 }),
      ProductModel.build({ "id": 2, "name": "Espada Justiceira", "price": "20 peças de ouro", "orderId": 1 }),
      ProductModel.build({ "id": 3, "name": "Lira de Orfeu", "price": "1 peça de ouro", "orderId": 2 }),
    ]);

    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(listaDeProdutosFindAll);
  });
});
