
import React from 'react'
import { useState } from 'react';
import { Switch } from 'antd';
import "./assets/App.css";
import { useEffect } from 'react';



function Practice() {
  //const [click, setClick] = useState(1); for toggule button start
  const [toggul, setToggle] =useState(false);
  const toggler=()=>{
    toggul?setToggle(false):setToggle(true);
  }
  //end toggul button

  const roomData=[{
    "id": 22165,
    "name": "Room No : 03 (ENT)",
    "description": "Dept-ENT",
    "uuid": "aba8ef93-25e9-11ee-8e67-080027c205d3",
    "locationTagName": "OpdConsultationRoom",
    "status": "ACTIVE"
},
{
    "id": 22166,
    "name": "Room No : 05 (ENT)",
    "description": "Dept-ENT",
    "uuid": "7cac3433-25ed-11ee-8e67-080027c205d3",
    "locationTagName": "OpdConsultationRoom",
    "status": "ACTIVE"
},
{
    "id": 22167,
    "name": "Room No : 07 (ENT)",
    "description": " Dept-ENT",
    "uuid": "f5fa221d-26b8-11ee-ac62-080027c205d3",
    "locationTagName": "OpdConsultationRoom",
    "status": "ACTIVE"
}];
  const [patients, setPatients] = useState(roomData);

  useEffect(() => {
    async function fetchPatients() {
      try {
        const response = await fetch('yarn start'); // Replace with your API endpoint
        const data = await response.json();
        setPatients(data); // Update the state with fetched patient data
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    }

    fetchPatients();
  }, []); // Empty dependency array ensures the effect runs only once on component mount


    
    
  return (
    <div className='container-flude-department'>      
        <table className='table m-2 border'>
          <thead>
            <tr>
            <th scope='col'>SL No</th>
              <th scope='col'>Room No</th>
              <th scope='col'>Department</th>
              <th scope='col'>Status</th>
              <th scope='col'>Action</th>
            </tr>            
          </thead>
          <tbody>           
            {
            patients.map((patient,index) => (
            <tr>
              <th scope="row" key={index}>{index+1}</th>              
              <td>{patient.name}</td>
              <td>{patient.description}</td>                          
              <td>{patient.status}</td>
              <td>{}
                <Switch onClick={toggler} className="outline-success" type="submit"/>
              </td>
            </tr>
            ))}         
          </tbody>
        </table>
      
    </div>
  )
}

export default Practice
