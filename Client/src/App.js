

import React from 'react'
// import Particle from './Component/Particle'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from './Component/Header'
import { Foooter } from './Component/Foooter'
import { Certificate } from './Component/Certificate'
import Homepage from './Component/Home_page/Homepage'
import { AdminLogin } from './Component/Admin/Login/AdminLogin'
import { VerifyAuth } from './Component/Admin/Authentication/VerifyAuth'
import { StudentCertificate } from './Component/Admin/StudentDetail/StudentCertificate'
import { Verify } from './Component/VerificationPage/Verify'
import "./Css/certificate_design.css"

import Particle from './Component/Particle'
import CertificateList from './Component/Admin/Certificates/CertificateList';
import { Certificatedetails } from './Component/Certificatedetails'
import UniqueeId from './Component/VerificationPage/UniqueeId'
import { AuthProvider } from './Component/Admin/Authentication/AuthContext';
import PrivateRoute from './Component/Admin/Authentication/PrivateRoute';


export const App = () => {
 
  return (
    <div>
      <Particle />
      <AuthProvider>
        <BrowserRouter>
        <Header />
          <Routes>
{/*           
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/verify-auth" element={<PrivateRoute component={VerifyAuth}/>} />
            <Route path="/student-certificate" element={<PrivateRoute component={StudentCertificate} />} />
            <Route path="/confirm" element={<PrivateRoute component={Certificate} />} />
            <Route path="/certificate_details" element={<Certificatedetails />} />
            <Route path={"/certificate_details/:uniqueId"} element={<Certificatedetails />} />
            <Route path="/unique_id" element={<UniqueeId />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/CertificatesList" element={<PrivateRoute component={CertificateList} />} />
            <Route path="*" element={<Homepage />} /> */}

         <Route path="/admin" element={<AdminLogin />} />
            <Route path="/verify-auth" element={<VerifyAuth/>} />
            <Route path="/student-certificate" element={<StudentCertificate/>} />
            <Route path="/confirm" element={<Certificate />} />
            <Route path="/certificate_details" element={<Certificatedetails />} />
            <Route path={"/certificate_details/:uniqueId"} element={<Certificatedetails />} />
            <Route path="/unique_id" element={<UniqueeId />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/CertificatesList" element={< CertificateList />} />
            <Route path="*" element={<Homepage />} />

       
        </Routes>
        {/* <Particle/> */}
      </BrowserRouter>
      </AuthProvider>
      <Foooter />
    </div>
  );
};

export default App;
