import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

const app = props => {
  const [originalstatus,newstatus] = useState(
    {
      person:[
        {name: 'Max', age: 24},
        {name: 'Manu', age: 25},
        {name: 'Mabbu', age: 26}
      ]
    }
  );

  const [otherstateori,otherstatevari] = useState('new state');
  console.log(originalstatus,otherstateori);
  const displaynameHandler = () =>{
    newstatus({
      person:[
        {name: 'x', age: 24},
        {name: 'Manu', age: 25},
        {name: 'Mabbu', age: 26}
      ]
    })
  }
  
    return (
      <div className="App">
        <p> this is working </p>
        <button onClick={displaynameHandler}>Click Me</button>
        <h1>This is my first react app</h1>
        <Person name={originalstatus.person[0].name} age={originalstatus.person[0].age} />
        <Person name={originalstatus.person[1].name} age={originalstatus.person[2].age} > Hello! this is so interesting</Person>
        <Person name={originalstatus.person[2].name} age={originalstatus.person[2].age} />
      </div>
    )
    //return (React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hello this is testing')));
};

export default app;
/*
class App extends Component {
state = {
  person: [
    {name: 'Max', age: 24},
    {name: 'Manu', age: 25},
    {name: 'Mabbu', age: 26}
  ]
}

displaynameHandler = () =>{
    this.setState({
      person: [
      {name: 'x', age: 24},
      {name: 'Manu', age: 25},
      {name: 'Mabbu', age: 26}
      ]
    })
  }
*/