const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// 요청이 들어오는지 확인
app.use((req, res, next) => {
  console.log('Request received!');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  console.log('Request to /api/hello');
  res.send({ message: 'hello ex' });
});

app.listen(port, () => {
  console.log(`서버 동작 중: ${port}`);
});
