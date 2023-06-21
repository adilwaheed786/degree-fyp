import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Component/Header';
import { Foooter } from './Component/Foooter';
import { Certificate } from './Component/Certificate';
import Homepage from './Component/Home_page/Homepage';
import { AdminLogin } from './Component/Admin/Login/AdminLogin';
import { VerifyAuth } from './Component/Admin/Authentication/VerifyAuth';
import { StudentCertificate } from './Component/Admin/StudentDetail/StudentCertificate';
import { Verify } from './Component/VerificationPage/Verify';
import './Css/certificate_design.css';
import { AuthProvider, useAuth } from './Component/Admin/Authentication/AuthContext';
import Particle from './Component/Particle';
import CertificateList from './Component/Admin/Certificates/CertificateList';
import { Certificatedetails } from './Component/Certificatedetails';
import UniqueeId from './Component/VerificationPage/UniqueeId';

const App = () => {
  const { isAuthenticated, isAdmin } = useAuth();

  return (
  
      <div>
        <Particle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/admin" element={<AdminLogin />} />
            <Route
              path="/verify-auth"
              element={isAuthenticated && isAdmin ? <VerifyAuth /> : <Navigate to="/admin" />}
            />
            <Route
              path="/student-certificate"
              element={isAuthenticated && isAdmin ? <StudentCertificate /> : <Navigate to="/admin" />}
            />
            <Route

              path="/confirm"
              element={isAuthenticated && isAdmin ? <Certificate /> : <Navigate to="/admin" />}
            />
            <Route
              path="/certificate_details"
              element={<Certificatedetails />}
            />
            <Route
              path={"/certificate_details/:uniqueId"}
              element={<Certificatedetails />}
            />
            <Route
              path="/unique_id"
              element={<UniqueeId />}
            />
            <Route
              path="/verify"
              element={<Verify />}
            />
            <Route
              path="/CertificatesList"
              element={isAuthenticated && isAdmin ? <CertificateList /> : <Navigate to="/admin" />}
            />
            <Route
              path="*"
              element={<Homepage />}
            />
          </Routes>
        </BrowserRouter>
        <Foooter />
      </div>
  
  );
};

export default App;
