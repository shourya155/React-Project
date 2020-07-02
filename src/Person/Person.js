import React from 'react';

const person = (props) => {
    return (
    <div>
    <h4> i am {props.name} of age {props.age} </h4>
    <p>{props.children}</p>
    </div>
    )
};

export default person;