import { Request, Response } from 'express';
import chatService from '../services/chat.service';

class ChatController {
    async listChats(req: Request, res: Response) {
        res.status(200).send(await chatService.list());
    }
}

export default new ChatController();