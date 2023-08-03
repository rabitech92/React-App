import React, {useState,useEffect}from 'react'
import "./assets/Home.css";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';




export function Home() {

     const [users, setUsers] = useState([]);
     const  {id} =useParams();
     
     useEffect(() => {
        loadUsers();

       
     },[]);
      const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/api/user/getAll")
        setUsers(result.data);
      }
     
      const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/api/user/${id}`)
        loadUsers();
        
       }

    
    

    return (    
           
           <div className='container'>
            
            <div className="py-4">
            <h1 className='list'>User List</h1>
                <table className="table border shadow">
                   
                    <thead>
                        <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">User Email</th>
                        <th scope="col">User Password</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>  
                        {
                            users.map((user,index)=> (
                                <tr>
                                    <th scope="row" key={index}>{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        
                                        <Link to={`/editUser/${user.id}`} className="btn btn-light">Edit</Link>
                                        <Link className="btn btn-primary mx-2" to={`/viewUser/${user.id}`}> View</Link>
                                        <button className="btn btn-danger" onClick={(id) =>deleteUser(user.id)}>Delete</button>
                                    </td>
                                 </tr>

                            ))
                        }                     
                        
                    </tbody>
                </table>
            </div> 
        </div>     
    )
}
