import express from 'express';
import routes from './routes/health-check';

const app = express();

app.use('/', routes);

const server = app.listen(process.env.PORT, () => {
  const { address, port } = server.address();

  console.log(`Posts service listening at http://${address}:${port}`);
});
