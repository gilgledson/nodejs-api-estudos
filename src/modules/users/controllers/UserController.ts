import User from '../typeorm/entities/User';
import { Request, Response } from 'express';
import ListUserServices from '../services/ListUserServices';
import CreateUserService from '../services/CreateUserService';
import ShowUserService from '../services/ShowUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';
class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const userService = new ListUserServices();
    const users = await userService.execute();
    console.log(request.user);
    return response.json(users);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const userService = new CreateUserService();
    const user = await userService.execute({ name, email, password });
    return response.json(user);
  }
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userService = new ShowUserService();
    const user = await userService.execute(id);
    return response.json(user);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const { id } = request.params;
    const userService = new UpdateUserService();
    const user = await userService.execute({ id, name, password, email });
    return response.json(user);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userService = new DeleteUserService();
    const user = await userService.execute({ id });
    return response.json(user);
  }
}

export default UserController;
