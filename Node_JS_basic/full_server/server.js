import express from 'express';
import router from './routes';

const app = express();

app.use(router);

const PORT = 1245;

if (require.main === module) {
  app.listen(PORT);
}

export default app;
