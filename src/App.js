import React from 'react'
// import Particle from './Component/Particle'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from './Component/Header'
import { Foooter } from './Component/Foooter'
import { Certificate } from './Component/Certificate'
import {NoPage} from './Component/NoPage'
import Homepage from './Component/Home_page/Homepage'
import { Certificatedetails } from './Component/Certificatedetails'
import { AdminLogin } from './Component/Admin/Login/AdminLogin'
import { Verify } from './Component/Admin/Authentication/Verify'
import { StudentCertificate } from './Component/Admin/StudentDetail/StudentCertificate'
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
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/verify-auth" element={<Verify />} />
            <Route path="/student-certificate" element={<StudentCertificate />} />
            <Route path="/confirm" element={<Certificate />} />
            
            <Route path="/certificate_details" element={<Certificatedetails />} />
            <Route path="*" element={<NoPage />} />
          
          </Route>
           
        </Routes>
        {/* <Particle/> */}
      </BrowserRouter>
     
      <Foooter />
     
    </div>
  )
}
export default App
