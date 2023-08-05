import React, { Component } from 'react';

const name = "Bangladesh"

class Test extends Component {

    // state ={
    //     name:"Sinha islam",
    //     age:29,
    //     nid :12312958742,
    // }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name:"Sinha Sardar",
    //         age:19,
    //         nid:{
    //             nid1:123456, //nested state
    //             nid2:456789,
    //             nid3:789456,
    //         }
    //     }
    // }
    // changeValue(){
    //     this.setState(
    //         {
    //             nid :1598475326951,
    //         }
    //     )
    // }

    render() {
        return (
            <div className='test'> 
            <h1>I am from {name}</h1>
            
            </div>
        );
    }
}
 
export default Test;