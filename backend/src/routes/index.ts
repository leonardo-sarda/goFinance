import { Router } from 'express';
//import transacaoRouter from './transacao.routes';
import usersRouter from './users.routes';
import transacaoRouter from './transacao.routes';

const routes = Router();

routes.use('/user', usersRouter);
routes.use('/transacao', transacaoRouter);

export default routes;
