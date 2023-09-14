import OrderModel, {
} from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order, OrderFormatada } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

function formataPedido(pedidos: Order[]): OrderFormatada[] {
  const pedidosFormatados = pedidos.map((pedido) => {
    let numeroPedidos: number[] = [];
    if (pedido.productIds) {
      numeroPedidos = pedido.productIds.map((produto) => produto.id);
    }
    const pedidoFormatado = {
      id: pedido.id,
      userId: pedido.userId,
      productIds: numeroPedidos,
    };
    return pedidoFormatado;
  });
  return pedidosFormatados;
}
  
async function getOrders(): Promise<ServiceResponse<OrderFormatada[]>> {
  const pedidos = await OrderModel.findAll({
    include: [
      { model: ProductModel, as: 'productIds', attributes: ['id'] },
    ],
  });

  const pedidosApenasComDataValues = pedidos.map((pedido) => pedido.dataValues);
  // também poderia usar pedidos.map((pedido) => pedido.toJSON());
  const pedidosFormatado = formataPedido(pedidosApenasComDataValues);
  return {
    status: 200,
    data: pedidosFormatado,
  };
}
export default {
  getOrders,
};