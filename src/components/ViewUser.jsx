import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'ra';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function ViewUser() {

    const [user, setUser]= useState({

        name  :"",
        email :"",
        password :"",
  
      })

      const {id}=useParams()
      useEffect(() => {

      })
      useEffect(() =>{
        loadUser()
      },[])

      const loadUser=async()=>{
        const result =await axios.get(`http://localhost:8080/api/user/${id}`)
        setUser(result.data)
      }

  return (
    <div className='container'>  

        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4 "> User Details </h2><hr className="border border-primary border-3 opacity-75" />
            
            <div className="card">
                <div className="card-header">
                    Details of User Id :
                    {user.id}
                    <ul className="list-group list-group-flush">
                       <li className="list-group-item">
                        <b>Name :</b>
                        {user.name}
                       </li>
                       <li className="list-group-item">
                        <b>Email :</b>
                        {user.email}
                       </li>
                       <li className="list-group-item">
                        <b>Password :</b>
                        {user.password}
                       </li>
                    </ul>
                </div>

            </div>
            <Link className="btn btn-primary my-2" to={"/"}>Back to home</Link>
            </div>
         </div>
      </div>
  )
}

export default ViewUser