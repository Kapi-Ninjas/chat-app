import { Request, Response } from 'express';
import userService from '../services/user.service';

class UserController {
    async listUsers(req: Request, res: Response) {
        res.status(200).send(await userService.list());
    }

    async createUser(req: Request, res: Response) {
        const user = req.body;
        res.status(200).send(await userService.create(user));
    }
}

export default new UserController();