import "./assets/User.css" 
import React, {Fragment, useState} from "react";
import axios  from 'axios';
import { Link, useNavigate,  } from "react-router-dom";


function User() {

  let navigate = useNavigate()

    const [user, setUser]= useState({

      name  :"",
      email :"",
      password :"",

    })  


     const {name,email,password} =user;

     const onInputChange = (e) =>{
      setUser({...user,[e.target.name]: e.target.value
      });
     };

     const onSubmit= async (e)=>{
      e.preventDefault();
      await axios.post("http://localhost:8080/api/user",user );
      navigate("/")
     
     };

     

  
  return (

    <Fragment>
      
    <div className='container'>  

        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4 "> Rergister Patient</h2><hr className="border border-primary border-3 opacity-75" />
            <form onSubmit={(e)=> onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name  :</label>
              <input type="text" className="form-control" placeholder=" Your Name"  name="name" value={name} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email  :</label>
              <input type="email" className="form-control" placeholder=" Your Email"  name="email" value={email} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password  :</label>
              <input type="password" className="form-control" placeholder=" Your Password"  name="password" value={password} onChange={(e)=>onInputChange(e)}/>
            </div>
            <button  className="btn btn-outline-success m-2 " type="submit">Submit</button>
            <Link to="/home" className="btn btn-outline-danger " >Cancel</Link>
            </form>

          </div>
          </div>    
       
    </div>
    
    </Fragment>
  )
}

export default User 