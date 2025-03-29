import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';
import { withStyles } from '@mui/styles'; // ✅ 올바른 import

const styles = (theme) => ({
  root: {
    width: '100%',   
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: 'https://picsum.photos/101/100',
    name: '황병규',
    birthday: '730222',
    gender: '남',
    job: '개발자222',
  },
  {
    id: 2,
    image: 'https://picsum.photos/102/100',
    name: '이이이이',
    birthday: '880222',
    gender: '남',
    job: '개발자22',
  },
  {
    id: 3,
    image: 'https://picsum.photos/103/100',
    name: '김미김김',
    birthday: '990222',
    gender: '남',
    job: '개발자3',
  },
];

class App extends Component {
  render() {
    const { classes } = this.props; // ✅ this.props에서 classes 추출
    return (
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(styles)(App);
