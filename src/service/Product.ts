import ProductModel, { 
  ProductInputtableTypes, 
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function newProduct(produto: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const novoProduto = await ProductModel.create(produto);
  return {
    status: 201,
    data: novoProduto.dataValues,
  };
}

async function getProducts(): Promise<ServiceResponse<Product[]>> {
  const produtos = await ProductModel.findAll();
  const produtosApenasComDataValues = produtos.map((produto) => produto.dataValues);
  return {
    status: 200,
    data: produtosApenasComDataValues,
  };
}

export default {
  newProduct,
  getProducts,
};