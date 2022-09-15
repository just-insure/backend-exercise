import express, { Express, json } from 'express';
import routes from './ports/rest';

const app: Express = express();
app.use(json());

app.use('/', routes);

app.listen(5000, () => {
  console.log('Server listening on port 5000')
});