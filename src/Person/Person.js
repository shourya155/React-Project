import React from 'react';
import './Person.css';
import styled from 'styled-components';
const StyledDiv = styled.div`
    width: 60%;
    color:pink;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    '@media(min-width:500px)':{
        width:'450px'
    }
`;
const person = (props) => {
    
    return (
    <StyledDiv>
    <h4 onClick={props.click}> i am {props.name} of age {props.age} </h4>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name}/>
    </StyledDiv>
    )
};

export default person;