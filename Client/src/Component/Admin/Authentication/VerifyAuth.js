import React, { useState } from 'react';
import { Link } from "react-router-dom";


import './verify.css';

export const VerifyAuth = () => {
    const [code, setCode] = useState('');

    return (
        <div className="OuterContainer">
            <div className="InnerContainer">
                <b>
                    <h1 className="heading">VERIFY YOUR EMAIL</h1>
                </b>
                <div>
                    <p>We Have Sent A Verification Code To Your E-mail ad*****@gmail.com</p>
                </div>
                <div>
                    <input placeholder="Enter Code" className="form-control UserInput mt-20 shadow" type="text" onChange={(event) => setCode(event.target.value)} />
                </div>
                <Link onClick={e => (!code ) ? e.preventDefault() : null} to={"/student-certificate"}>
                    <button className={'button mt-20'} type="submit">Verify</button>
                </Link>
            </div>
        </div>
    );
}