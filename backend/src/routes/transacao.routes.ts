import { Router } from 'express';

const transacaoRouter = Router();

transacaoRouter.get('/', async (request, response) => {
  return response.json({ message: 'Feito a transacaoRouter!' });
});

export default transacaoRouter;
