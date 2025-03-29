const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

// CORS 미들웨어를 app 객체가 생성된 후에 호출
app.use(cors());

// 요청이 들어오는지 확인하는 미들웨어
app.use((req, res, next) => {
  console.log('Request received!');
  next();
});

// express 내장 미들웨어 사용 (body-parser 대신)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  console.log('Call client  ====> call');
  res.json([
    {
      id: 1,
      image: 'https://picsum.photos/101/100',
      name: '서버 황병규',
      birthday: '730222',
      gender: '남',
      job: '개발자222',
    },
    {
      id: 2,
      image: 'https://picsum.photos/102/100',
      name: '서버 이이이이',
      birthday: '880222',
      gender: '남',
      job: '개발자22',
    },
    {
      id: 3,
      image: 'https://picsum.photos/103/100',
      name: '서버 김미김김',
      birthday: '990222',
      gender: '남',
      job: '개발자3',
    },
  ]);
});

app.listen(port, () => {
  console.log(`서버 동작 중 : ${port}`);
});
