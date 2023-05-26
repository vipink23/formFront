import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Home.css'
import { useDispatch,useSelector } from "react-redux";
import {Logout} from "../Features/UserSlice";

function Home() {
  const {user}=useSelector((state)=>state.user)
  console.log(user?.fullName);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
const logout=()=>{
  dispatch(Logout())
  navigate('/login')
}

  return (
    
  <div>
    <div style={{position: 'absolute', top: '0', right: '0', marginTop: '20px', marginRight: '20px'}}>
    {user?.fullName}
    <button onClick={logout}>logout</button>
    </div>


    <div className="heding">
    <h4>Name your Organisation</h4>
    <input type="text" placeholder="enter organisation name"/>
    </div>

    <h5>select your Organisation below</h5>

    
    <div className="row">
        <div className="column">
          <div className="card"></div>
        </div>
        <div className="column">
          <div classN="card">contruction</div>
        </div>
        <div className="column">
          <div className="card">education</div>
        </div>
        <div className="column">
          <div className="card">consultancy</div>
        </div>
      </div>
  </div>
    
  );
}

export default Home;
