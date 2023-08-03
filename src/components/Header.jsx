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
                    <button className="btn btn-light"><Link to={"/home"}>User List</Link></button>
                    <button className="btn btn-light"><Link to={"/user"}>New User</Link></button>                         
                    
                </div>                
            </nav>            
        </div>
    )
}
