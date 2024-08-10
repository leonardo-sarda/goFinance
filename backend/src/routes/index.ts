import { Router } from 'express';
//import transacaoRouter from './transacao.routes';
import nomesRouter from './nomes.routes';

const routes = Router();

routes.use('/nomes', nomesRouter);

export default routes;
