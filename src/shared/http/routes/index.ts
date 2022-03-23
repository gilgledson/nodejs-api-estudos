import { Router } from 'express';
import productsRoutes from '@modules/products/routes/products.routers';
import usersRoutes from '@modules/users/routes/users.routes';
import sessionRouters from '@modules/users/routes/session.routers';
import isAuthenticated from '@modules/users/middlewares/isAuthenticated';

const routes = Router();
routes.use('/products', productsRoutes);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionRouters);

export default routes;
