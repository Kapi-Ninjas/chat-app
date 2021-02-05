import { Router } from 'express';
import chatController from '../controllers/chat.controller'

export default function (routes: Router) {
    routes.get('/chats', chatController.listChats);
}