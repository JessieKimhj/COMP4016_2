const express = require('express');
const app = express();

app.get('/envValue', (req, res) => {
  const envValue = process.env.ENV_VALUE || 'environmentSnake';
  res.send(envValue);
});

app.get('/configValue', (req, res) => {
  const configValue = process.env.CONFIG_VALUE || 'snake';
  res.send(configValue);
});

app.get('/secretValue', (req, res) => {
  const secretValue = process.env.SECRET_VALUE || 'secretSnake';
  res.send(secretValue);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
