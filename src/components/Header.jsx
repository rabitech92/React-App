import React from 'react'
import { Link } from 'react-router-dom'
import "./assets/Header.css"


// const name ="Total Patient Number = ";

export function Header(props) {   

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand ">Full Stack Application</a>
                    <form class="d-flex  m-2" role="search">
                        <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        
                    </form>
                    <span>
                    <select className="form-select-sm mb-3" >
                            <option selected>Open this select menu</option>
                            <option><Link to ={"/addPatient"}></Link>Patient</option>
                            <option>Doctor</option>
                        </select>
                        <button className="btn btn-light m-2"><Link to={"/home"}>User List</Link></button>
                        <button className="btn btn-light "><Link to={"/user"}>New User</Link></button> 
                    </span>      
                 </div>                
            </nav>            
        </div>
    )
}
