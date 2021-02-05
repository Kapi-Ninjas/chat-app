import { Router } from 'express';
import userController from '../controllers/user.controller'

export default function (routes: Router) {
    routes.get('/users', userController.listUsers);
    routes.post('/users', userController.createUser);
}