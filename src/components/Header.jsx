import React from 'react'
import { Link } from 'react-router-dom'
import "./assets/Header.css"

const name ="Total Patient Number = ";

export function Header(props) {   

    return (

        <div className='navhead'>
               <div className="navbar">
                    <ul><Link to={"/home"}>Home</Link></ul>
                    <ul><Link to={"/about"}>About</Link></ul>
                    <ul><Link to={"/contact"}>Contact</Link></ul>

                    <div className="user">
                        <ul>New User</ul>

                    </div>
               </div>

               <table className='tbl'>
                <thead>
                    <tr>
                        <th>Patient Id</th>
                        <th>Patient Name</th>
                        <th>Patient Age</th>
                        <th>Patient NID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>101</td>
                        <td>Tanvir hasan</td>
                        <td>55</td>
                        <td>12151418</td>
                    </tr>
                </tbody>
               </table>
               <p>{name}</p>

            </div>
    )
}
