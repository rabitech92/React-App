import React from 'react'
import { Link } from 'react-router-dom'
import "./assets/Header.css"
import { Home } from './Home'

// const name ="Total Patient Number = ";

export function Header(props) {   

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Full Stack Application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <button className="btn btn-light"><Link to={"/home"}>New User</Link></button>
                    <button className="btn btn-light"><Link to={"/user"}>New User</Link></button>                         
                    
                </div>
                
            </nav>
            <Home/>
        </div>
    )
}
