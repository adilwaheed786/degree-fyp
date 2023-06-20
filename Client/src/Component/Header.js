import React from 'react'
import logo from '../images/logo.png'
import { Outlet, Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
         {/* -------Navbar code start */}
      <nav className="navbar navbar-expand-lg bg-blue  navbar-light">
        <div className="container-fluid">
          <img src={logo} alt="" style={{ height: "70px" }} />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color: "black" }}>
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page"  to="/" class="white-text">HOME</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/verify" class="white-text">VERIFY</Link>
              </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item">
                <Link  className="nav-link" to="/admin" class="white-text">ADMIN PANNEL</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/CertificatesList" class="white-text">CERTIFICATES</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      {/* ---------Navbar code end */}
    </div>
  )
}
