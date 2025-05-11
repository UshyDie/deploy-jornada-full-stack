import express from 'express';
import cors from 'cors'; //Middleware - trata a requisição no meio do caminho
import { db } from './connect.js';
import path from 'path';

const _dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/', (request, response) => {
  response.send("Só vamos trabalhar com endpoints '/artistas' e '/songs'");
});

app.get('/api/artists', async (request, response) => {
  response.send(await db.collection('artists').find({}).toArray());
});

app.get('/api/songs', async (request, response) => {
  response.send(await db.collection('songs').find({}).toArray());
});

app.use(express.static(path.join(_dirname, '../front-end/dist')));

app.get(/.*/, async (request, response) => {
  response.sendFile(path.join(_dirname, '../front-end/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
