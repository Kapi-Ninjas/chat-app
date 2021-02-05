import { Router } from 'express';
import messageController from '../controllers/message.controller'

export default function (routes: Router) {
    routes.get('/messages', messageController.listMessages);
}