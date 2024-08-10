import { Router } from 'express';
import transacaoRouter from './transacao.routes';

const routes = Router();

routes.use('/transacoes', transacaoRouter);

export default routes;
