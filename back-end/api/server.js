import express from 'express';
import cors from 'cors'; //Middleware - trata a requisição no meio do caminho
import { db } from './connect.js';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/', (request, response) => {
  response.send(
    'Olá,Mundo! Com o --watch náo é mais necessário ficar atualizando o servidor'
  );
});

app.get('/artists', async (request, response) => {
  response.send(await db.collection('artists').find({}).toArray());
});

app.get('/songs', async (request, response) => {
  response.send(await db.collection('songs').find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
