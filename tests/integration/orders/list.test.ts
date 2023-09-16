import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';
import { Order } from 'sequelize';
import { listaDePedidosFormatada, listaPedidosDoBanco } from '../../mocks/listaDePedidos';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Verifica se uma lista de pedidos é retornada', async function () {
    // precisei fazer um map para retornar um array com as informações do OrderModel e do ProductModel
    const retornoDosPedidos = listaPedidosDoBanco.map((pedido) => 
      OrderModel.build(pedido, { include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }] })
    );

    // console.log(retornoDosPedidos, 'retornoDosPedidos')
    sinon.stub(OrderModel, 'findAll').resolves(retornoDosPedidos);

    const response = await chai.request(app).get('/orders');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(listaDePedidosFormatada);
  });
});
