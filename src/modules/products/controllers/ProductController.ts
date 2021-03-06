import ListProductService from '../services/ListProductService';
import { Request, Response } from 'express';
import ShowProductService from '../services/ShowProductService';
import CreateProductService from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

export default class Productcontroller {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = new ListProductService();
    const products = await listProducts.execute();
    return response.json(products);
  }
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showProducts = new ShowProductService();
    const product = await showProducts.execute({ id });
    return response.json(product);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const createProducts = new CreateProductService();
    const product = await createProducts.execute({ name, price, quantity });
    return response.json(product);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const { id } = request.params;
    const updateProduct = new UpdateProductService();
    const product = await updateProduct.execute({ id, name, quantity, price });
    return response.json(product);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProduct = new DeleteProductService();
    await deleteProduct.execute({ id });
    return response.json([]);
  }
}
