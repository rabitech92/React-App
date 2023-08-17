import { useState,React } from 'react';
import {FaTh,FaBars,FaUserAlt,FaRegChartBar,FaCommentAlt,FaShoppingBag, FaHospitalSymbol, FaPaintRoller}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./assets/App.css";
import { Header } from './Header';


const Sidebar=({children}) =>{
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem =[
        {
            path:"/user",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/home",
            name:"home",
            icon:<FaUserAlt/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaRegChartBar/>
        },
        {
            path:"/patient",
            name:"Patient",
            icon:<FaCommentAlt/>
        },
        {
            path:"/login",
            name:"Login",
            icon:<FaShoppingBag/>
        },
        {
            path:"/roomManagment",
            name:"Room",
            icon:<FaHospitalSymbol/>
        },
        {
            path:"/user",
            name:"Patient List",
            icon:<FaPaintRoller/>
        }
        
         
    ]
  return (
    <div>
        <Header/>
        <div className="container expand-lg bg-white">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
            </div>
        </div>
  )
}

export default Sidebar
