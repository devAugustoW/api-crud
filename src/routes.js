import Router from 'express';
import LoginController from './controllers/LoginController';
import UserController from './controllers/UserController'

const routes = new Router();

// rota para criar usuário
routes.post('/login', LoginController.store);

// listar todos os usuários
routes.get('/users', UserController.index);

// editar usuário
routes.post('/users/:user_id', UserController.update);

// deletar usuário
routes.delete('/users/:user_id', UserController.delete);

export default routes;