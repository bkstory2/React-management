import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [
      {
      'id':1,
      'image':'https://picsum.photos/201/300',
      'name' :'황병규',
      'birthday':'730222',
      'gender':'남',
      'job':'개발자222'
      },
      {
        'id':2,
        'image':'https://picsum.photos/202/300',
        'name' :'이이이이',
        'birthday':'880222',
        'gender':'남',
        'job':'개발자22'
        }
      ,{
          'id':3,
          'image':'https://picsum.photos/203/300',
          'name' :'김미김김',
          'birthday':'990222',
          'gender':'남',
          'job':'개발자3'
       }
]

class App extends Component{
    render() {
        return(
          <div>
              {
                 customers.map(c=>{
                  return(
                     <Customer 
                        key={c.id} 
                        id={c.id} image={c.image}  name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
                     />
                  )
                 })
              }               
            </div>
        )
    }

}

export default App;
