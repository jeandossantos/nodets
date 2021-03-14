import { Router } from 'express';

import UserController from './controllers/UserController';

const route = Router();

route.get('/users', UserController.index);
route.post('/users', UserController.create);

export default route;
