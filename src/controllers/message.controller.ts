import { Request, Response } from 'express';
import messageService from '../services/message.service';

class MessageController {
    async listMessages(req: Request, res: Response) {
        res.status(200).send(await messageService.list());
    }
}

export default new MessageController();