import express from 'express';
const app = express();

app.get('/hello', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send("This is a test");
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});