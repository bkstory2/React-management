import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';
import { withStyles } from '@mui/styles'; 
import CircularProgress from '@mui/material/CircularProgress';

const styles = (theme) => ({
  root: {
    width: '100%',   
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080,
  }

});

  /*
    1  constructor
    2  componentWillMount
    3  render
    4. componentDidMount
    5. props or state => shouldcomponentUpdate() 

  */



class App extends Component {

  state = {
    customers: [],
    completed :  0 
  }

  componentDidMount() {
    
    this.timer = setInterval(this.progress , 20 ) ; 

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

  progress = () => {
    const { completed} = this.state ; 
    this.setState({completed: completed >=100 ? 0 : completed + 1 })
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
                <TableCell colSpan={6} align='center'>
                    <CircularProgress  variant="determinate" value={this.state.completed}   />

                </TableCell>
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
