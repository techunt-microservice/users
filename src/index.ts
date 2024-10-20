import express from 'express';

import { checkOrigin } from './middleware/check.origin';

const app = express();

app.use(checkOrigin);

app.get('/', (req, res) => {
  res.send('users service');
});

app.listen(8001, () => {
  console.log('App listening on port 8001');
});
