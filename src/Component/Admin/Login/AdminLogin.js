import React, { useState } from 'react';
import { Link } from "react-router-dom";


import './Adminlogin.css';

export const AdminLogin = () => {
  const [username, setName] = useState('');
  const [password, setRoom] = useState('');

  return (
    <div className="OuterContainer">
      <div className="InnerContainer">
        <b>
          <h1 className="heading">LOGIN</h1>
        </b>
        <div>
          <input placeholder="UserName/Email" className="form-control UserInput shadow" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Password" className="form-control UserInput mt-20 shadow" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!username || !password) ? e.preventDefault() : null} to={"/"}>
          <button className={'button mt-20'} type="submit">Log In</button>
        </Link>
      </div>
    </div>
  );
}