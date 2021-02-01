import { Request, Response } from 'express';

class Controller {
    send(req: Request, res: Response) {
        res.json({ teste: true })
            .status(200);
    }
}

export default new Controller();