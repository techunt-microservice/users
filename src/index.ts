import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('users service');
});

app.listen(8001, () => {
  console.log('App listening on port 8001');
});
