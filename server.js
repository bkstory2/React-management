const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 5000;

// CORS 미들웨어를 app 객체가 생성된 후에 호출
app.use(cors());


// database.json 읽기
const dbConfig = JSON.parse(fs.readFileSync('./database.json', 'utf8'));

// MySQL 연결 설정
const connection  = mysql.createConnection(dbConfig);


// 요청이 들어오는지 확인하는 미들웨어
app.use((req, res, next) => {
  console.log('Request received!');
  next();
});

// express 내장 미들웨어 사용 (body-parser 대신)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/customers_sample', (req, res) => {
    console.log('Call client  ====> call');
  
    // 5초(5000ms) 지연 후 응답 전송
    setTimeout(() => {
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
    }, 10); // 5000ms = 5초
  });

app.listen(port, () => {
  console.log(`서버 동작 중 : ${port}`);
});


// MySQL 연결
connection.connect((err) => {
    if (err) {
      console.error('MySQL 연결 실패:', err);
      return;
    }
    console.log('MySQL 연결 성공');
  });
  
  // 고객 목록 조회 API
  app.get('/api/customers', (req, res) => {
    console.log('고객 목록 요청 수신');
    
    const query = 'SELECT * FROM customer';
  
        connection.query(query, (err, results) => {
            if (err) {
                console.error('connection 조회 오류:', err);
                return res.status(500).send('서버 오류');
            }
             res.json(results);
        });
  });