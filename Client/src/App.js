import React from 'react'
// import Particle from './Component/Particle'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from './Component/Header'
import { Foooter } from './Component/Foooter'
import { Certificate } from './Component/Certificate'
import Homepage from './Component/Home_page/Homepage'
import { Certificatedetails } from './Component/Certificatedetails'
import  Login_component  from "./Component/Admin/Login/Login_component"
import Signup_component  from './Component/Admin/Login/Signup_component'
import { VerifyAuth } from './Component/Admin/Authentication/VerifyAuth'
import { StudentCertificate } from './Component/Admin/StudentDetail/StudentCertificate'
import { Verify } from './Component/VerificationPage/Verify'
import "./Css/certificate_design.css"
import Particle from './Component/Particle'


export const App = () => {
  return (
    <div>
      <Particle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Homepage />} />
            <Route path="/sign-in" element={<Login_component />} />
            <Route path="/sign-up" element={<Signup_component />} />
            <Route path="/verify-auth" element={<VerifyAuth />} />
            <Route path="/student-certificate" element={<StudentCertificate />} />
            <Route path="/confirm" element={<Certificate />} />           
            <Route path="/certificate_details" element={<Certificatedetails />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="*" element={<Homepage />} />
          </Route>
           
        </Routes>
        {/* <Particle/> */}
      </BrowserRouter>
     
      <Foooter />
     
    </div>
  )
}
export default App
