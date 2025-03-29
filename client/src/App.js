import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';
import { withStyles } from '@mui/styles'; 

const styles = (theme) => ({
  root: {
    width: '100%',   
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080,
  },
});


class App extends Component {

  state = {
    customers: [],
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => {
          console.error("API 호출 실패:", err);
          // 에러 상태를 추가해서 UI에 표시할 수 있음
          this.setState({ customers: [] }); // 예시로 빈 배열을 반환
      });
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json(); 
    return body;
  }

  render() {
    const { classes } = this.props;
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
            {this.state.customers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6}>고객 데이터가 없습니다.</TableCell>
              </TableRow>
            ) : (
              this.state.customers.map((c) => (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  
}

export default withStyles(styles)(App);
