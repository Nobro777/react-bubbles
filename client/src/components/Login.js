import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import axios from 'axios';

const Login = (props) => {
  
  const [credentials, setCredentials] = useState({})

  const onSubmit = e => {
    e.preventDefault();
    console.log(credentials)
    axiosWithAuth()
    .post('http://localhost:5000/api/login', credentials)
    .then( res => {
      console.log("post response :", res);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubble-page')
    })
  }

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }

  return (
    <>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", alignContent:"center"}}>
        <h2>Welcome to the Bubble App!</h2>
        <form onSubmit={onSubmit} style={{boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)", margin:"5%", padding:"5%", display:"flex", flexDirection:"column", alignItems:"center", alignContent:"center"}}>
          <h2>Sign in</h2>
          <label htmlFor="username" style={{margin:"1% 0 1% 0", width: "60%"}}>Enter your Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username..."
            value={credentials.username}
            onChange={handleChange}
            style={{width: "40%"}}
          />
          <label htmlFor="password" style={{margin: "1% 0 1% 0", width: "60%"}}>Enter your Password</label>
          <input 
            type="password"
            name="password"
            placeholder="Password..."
            value={credentials.password}
            onChange={handleChange}
            style={{width: "40%"}}
          />
          <button style={{margin: "2% 0 2% 0", borderRadius:"5px"}}>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
