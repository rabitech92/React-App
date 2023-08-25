import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function ViewUser() {
 
    const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {id} = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async (data) => {
    const result = await axios.get(`http://localhost:8080/api/user/${id}`);
    setUser(result.data);
  };

  return ( 
        
    <div className="container1">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Patient id : {user.id}
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
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
   
  );
}