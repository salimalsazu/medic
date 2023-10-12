import express from 'express';

import { UserRoutes } from '../modules/users/user.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { SpecializationRoutes } from '../modules/Specialization/specialization.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { MedServiceRoutes } from '../modules/services/service.routes';
import { ProductsRoutes } from '../modules/products/products.routes';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/specialization',
    route: SpecializationRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/services',
    route: MedServiceRoutes,
  },
  {
    path: '/products',
    route:  ProductsRoutes
  },
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
