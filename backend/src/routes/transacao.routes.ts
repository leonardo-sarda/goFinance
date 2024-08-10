// import { Router, Request, Response } from 'express';

// const transacaoRouter = Router();

// const nomes: { name: string }[] = [];

// transacaoRouter.get('/', (request, response) => {
//   try {
//     return response.json({ nomes });
//   } catch {
//     response.status(500).json({ message: 'Ocorreu um erro interno' });
//   }
// });

// transacaoRouter.post('/', (request, response) => {
//   try {
//     const { name } = request.body;

//     const nome = {
//       name,
//     };

//     if (typeof name === 'string') {
//       const nome = {
//         name,
//       };
//       nomes.push(nome);

//       return response.status(200).json({ message: `nome recebido ${name}` });
//     } else {
//       return response.status(400).json({ message: 'nome deve ser string' });
//     }
//   } catch {
//     response.status(500).json({ message: 'Ocorreu um erro interno' });
//   }
// });

// export default transacaoRouter;
