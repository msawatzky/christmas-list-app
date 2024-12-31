/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { DBHelper } from './app/helper/db.helper';
import { ListItemService } from './app/list-item/list-item.service';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to my-express-api!' });
});

app.get('/api/list-items', async (req, res) => {
  const listItems = await ListItemService.getAll();
  res.send(listItems);
});

app.post('/api/list-item', async (req, res) => {
  const listItem = await ListItemService.create(req.body);
  res.send(listItem);
});

app.delete('/api/list-item/:id', async (req, res) => {
  const deleted = await ListItemService.delete(req.params.id);
  res.send(deleted);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

DBHelper.init();
