import {Router} from 'express';
import PostsController from './controllers/PostsController';

const routes = Router();

routes.post('/posts', PostsController.create)
routes.get('/posts', PostsController.index)

export default routes