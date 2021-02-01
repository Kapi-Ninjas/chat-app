import { Router } from 'express';
import messageController from '../controllers/messages.controller'

export default function (routes: Router) {
    routes.get('/messages', messageController.send);
}