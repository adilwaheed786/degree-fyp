// import React, { useState } from 'react';
// import { Link } from "react-router-dom";

// import './Adminlogin.css';

// export const AdminLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div className="OuterContainer">
//       <div className="InnerContainer">
//         <b>
//           <h1 className="heading">LOGIN</h1>
//         </b>
//         <div>
//           <input placeholder="UserName/Email" className="form-control UserInput shadow" type="text" onChange={(event) => setUsername(event.target.value)} />
//         </div>
//         <div>
//           <input placeholder="Password" className="form-control UserInput mt-20 shadow" type="text" onChange={(event) => setPassword(event.target.value)} />
//         </div>
//         <Link onClick={e => (!username || !password) ? e.preventDefault() : null} to={"/verify-auth"}>
//           <button className={'button mt-20'} type="submit">Log In</button>
//         </Link>
//       </div>
//     </div>
//   );
// }