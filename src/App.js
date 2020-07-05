import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButt = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color:white;
  border: 1x solid blue;
  padding: 8px;
  cursor:pointer;
  font:inherit;
  &:hover{
    background-color: yellow;
    color:black;
  }
`;
class App extends Component{
  state = {
    person:[
      {id:'11',name: 'Rohith', age:16},
      {id:'14',name: 'Kauhik', age:17},
      {id:'13',name: 'Vam sai', age:18},
      {id:'12',name: 'Dilip', age:18}
    ],
    showPersons: false
  }
  clickingHandler = (newName) =>{
    this.setState({
      person:[
      {name: 'Rohith', age:16},
      {name: 'Kauhik', age:17},
      {name: newName, age:28},
      {name: 'Dilip', age:18}
      ]
    });
  }
  changevamsainame = (event) =>{
    this.setState({
      person:[
      {name: 'Rohith', age:16},
      {name: 'Kauhik', age:17},
      {name: event.target.value, age:28},
      {name: 'Dilip', age:18}
      ]
    });
  }
  dynamicnamechange = (event,idd) =>{
    const tempindex = this.state.person.findIndex(p =>{
      return p.id===idd;
    });
    const targetarra = {...this.state.person[tempindex]};
    targetarra.name = event.target.value;
    const persondup = [
      ...this.state.person
    ]
    persondup[tempindex]=targetarra;
    this.setState({
      person:persondup
    })
  }
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  deletemeplease = (hindex) =>{
    const persons = [...this.state.person];
    persons.splice(hindex,1);
    this.setState({person:persons});
  }
  render(){
    
    let flag = null;
    
    if(this.state.showPersons)
    {
      flag = ( 
    <div>
      {this.state.person.map((element,index) =>{
        return <Person name={element.name} age={element.age} click={() => this.deletemeplease(index)} key={element.id} change ={(event) => this.dynamicnamechange(event,element.id)}> </Person>
      }
      )}
    </div>
      );
    }
    //style.backgroundColor='red'
    //style[':hover']={
    //  backgroundColor:'purple',
    //  color:'pink'
    //}
    const dynamiccoloring = []
    if(this.state.person.length<=2)
    {
      dynamiccoloring.push('red')
    }
    
    if(this.state.person.length<=1)
    {
      dynamiccoloring.push('bold')
    }
  return(
    
    <div className="App">
    <p className={dynamiccoloring.join(' ')}>this is working</p>
    <StyledButt alt={this.state.showPersons} onClick={this.togglePersonsHandler}> Let us change age </StyledButt>
    {flag}
    </div>
    
  );
}
}

/*
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
*/
export default App;
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