import React, { Component } from 'react';
import "./assets/Test.css" 
const name = "Rabiul islam"

class Test extends Component {

    state ={
        name:"Sinha islam",
        age:29,
        nid :12312958742,
    } 
    render() {
        return (
            <div className='test'> 
            {/* <h1>{this.props.name}</h1> */}
                <h1>{"My name is "+ this.state.name +"and my age "+ this.state.age +" nid number "+ this.state.nid}</h1>
                
                
            </div>
        );
    }
}

export default Test;