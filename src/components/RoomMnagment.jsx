import React from 'react'
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import { useState } from 'react';

const RoomMnagment=()=> {
    const [toggul, setToggle] =useState(false);
    const toggler=()=>{
      toggul?setToggle(false):setToggle(true);
    }
  return (
    <div>
        <div className='container-md'> 
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4 "> Rergister Room </h2><hr className="border border-primary border-3 opacity-75" />
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="room" className="form-label">Room   :</label>
                                    <input type="text" className="form-control" placeholder=" Your Room No"  name="room" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="department" className="form-label">Department  :</label>
                                    <input type="text" className="form-control" placeholder=" Your Department"  name="department" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">Status  :</label>
                                    <input type="text" className="form-control" placeholder=" Your Status"  name="status" />
                                </div>
                                <Switch onClick={toggler}  className="outline-success m-2 " type="submit"/>
                                {toggul?<span>Active</span>:<span>No Active</span>}
                                <div>
                                    <button className="btn btn-outline-success m-2 " type="submit">Submit</button>
                                    <Link to="/home" className="btn btn-outline-danger">Cancel</Link>
                                </div>
                            </form>
                    </div>
                </div> 
            </div>
    </div>
  )
}

export default RoomMnagment