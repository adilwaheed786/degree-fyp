import React from 'react'
import logo from '../images/logo.png'

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
                <a className="nav-link " aria-current="page" href="/" class="white-text">HOME</a>
              </li>
             

              <li className="nav-item">
                <a className="nav-link" href="/" class="white-text">VERIFY</a>
              </li>


            </ul>

            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/" class="white-text">ADMIN PANNEL</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      {/* ---------Navbar code end */}
    </div>
  )
}
