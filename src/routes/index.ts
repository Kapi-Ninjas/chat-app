import { Router } from 'express';

import messagesRouter from './messages.route';

const routes = Router();

messagesRouter(routes);

export default routes;