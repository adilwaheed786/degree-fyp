import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Adminlogin.css';

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passworderror, setpassworderror]=useState("");
  const [emailerror, setemailerror] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    
    if (email.trim() === '') {
      setemailerror("This Field Is Required");
    
    } 
    else
    {
    validateEmail(email);
    }
    if (password.trim() === '') {
      setpassworderror("This Field Is Required");
     
    } else
    {
      validatePass(password)
    }

   if(validateEmail(email) && validatePass(password))
   {
  navigate("/verify-auth"); 
   }
  };
  const handleEmailFocus = () => {
    setemailerror("");
 }
 const handlePasswordFocus = () => {
  setpassworderror("");
}
  const validateEmail = (email) => {
    
    if(!email){
      console.log("EM"+email)
      setemailerror(
        "This Field Is Required")
      return false;
    }
    else  {
      const re = /\S+@\S+\.com+/;
      console.log(email)
      console.log(re.test(email))

      if(!re.test(email)){
        setemailerror("This Is Invalid Email Address")
        return false;
      }
      return re.test(email);
    }
    
   
  }
  const validatePass = (password) => {
   
    if(!password) {
      console.log("PSD"+password)
       setpassworderror("This Field Is Required")
       return false;
    } else if(password.length < 5) {
       setpassworderror("Invalid Paasword")
       return false;
    } else {
       const res = /^[a-zA-Z0-9]+$/;
       console.log(password)
       console.log(res)
       if(!res.test(password)) {
          setpassworderror("This Is Invalid Password ")
       }
       return res.test(password);
    }
 }

  return (
    <div className="OuterContainer">
      <div className="InnerContainer">
        <b>
          <h1 className="heading">LOGIN</h1>
        </b>
        <div>
          <input placeholder="Email" className="form-control UserInput shadow" type="text"  onChange={(event) => setEmail(event.target.value)} onFocus={handleEmailFocus} />
          {   emailerror && <span style={{ color: 'red' }}>{emailerror}</span>}
        </div>
        <div>
          <input placeholder="Password" className="form-control UserInput mt-20 shadow" type="password" onChange={(event) => setPassword(event.target.value)} onFocus={handlePasswordFocus} />
          {passworderror  && <span style={{ color: 'red' }}>{passworderror}</span>}
        </div>
        {/* <Link onClick={e => ((!validateEmail(email)) || (!validatePass(password)))  ? e.preventDefault() : null} to={"/verify-auth"}>
          <button onClick={handleLogin} className={'button mt-20'}  type="submit">Log In</button>
        </Link> */}
        <button className={'button mt-20'} type="submit" onClick={handleLogin}>Log In</button>
       
                            
      </div>
    </div>
  );
}
