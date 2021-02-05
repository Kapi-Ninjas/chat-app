import { Router } from 'express';

import messageRoute from './message.route';
import chatRoute from './chat.route';
import userRoute from './user.route';

const routes = Router();

messageRoute(routes);
chatRoute(routes);
userRoute(routes);

export default routes;