import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from './Component/Header'
import { Foooter } from './Component/Foooter'
import { Certificate } from './Component/Certificate'
import { NoPage } from './Component/NoPage'
import { AdminLogin } from './Component/Admin/Login/AdminLogin'
import { Verify } from './Component/Admin/Authentication/Verify'
import { StudentCertificate } from './Component/Admin/StudentDetail/StudentCertificate'
import "./Css/certificate_design.css"

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Certificate />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/verify-auth" element={<Verify />} />confirm
            <Route path="/student-certificate" element={<StudentCertificate />} />
            <Route path="/confirm" element={<Certificate />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Foooter />
    </div>
  )
}
export default App
