import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./Adminlogin.css"
import "./Login_component"
export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
            window.location.href = "./sign-in";
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="OuterContainer">
      <div className="InnerContainer">
        <form onSubmit={handleSubmit}>
        <h1 className="heading">SIGN UP</h1>
          
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3">
    
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}required
            />
          </div>

          <div className="mb-3">
          
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}required
            />
          </div>

          <div className="mb-3">
    
            <input
              type="email"
             
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}required
            />
          </div>

          <div className="mb-3">
           
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}required
            />
          </div>

          <div className="d-grid">
          {/* <button onClick={e => (!fname || !lname || !email || !password) ? e.preventDefault() : null} to={"/sign-in"}> </button>
          <button  className={'button mt-20'} type="submit" 
          > SIGN UP</button> */}
       
      <button className={'button mt-20'} type="submit" href="/sign-in" style={{color:"white" }}>
        Sign Up
            </button>  
         {/* <button className={'button mt-20'} type="submit">
          <a  href="/sign-in" style={{color:"white" }}>Sign Up</a>
            </button>  */}
            
          </div>
          <p className="forgot-password text-right" style={{color:"blue" }}>
            Already registered <a href="/sign-in" style={{color:"blue" }}>sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
