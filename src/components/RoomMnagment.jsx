import React from 'react'
import { Link } from 'react-router-dom';

function RoomMnagment() {
  return (
    <div>
        <div className='container'> 
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4 "> Rergister Patient</h2><hr className="border border-primary border-3 opacity-75" />
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name  :</label>
                                    <input type="text" className="form-control" placeholder=" Your Name"  name="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email  :</label>
                                    <input type="email" className="form-control" placeholder=" Your Email"  name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password  :</label>
                                    <input type="password" className="form-control" placeholder=" Your Password"  name="password" />
                                </div>
                                <button  className="btn btn-outline-success m-2 " type="submit">Submit</button>
                                <Link to="/home" className="btn btn-outline-danger " >Cancel</Link>
                            </form>
                    </div>
                </div> 
            </div>
    </div>
  )
}

export default RoomMnagment