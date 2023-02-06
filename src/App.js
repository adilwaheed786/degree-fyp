import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./Css/certificate_design.css"
import { Header } from './Component/Header'
import { Foooter } from './Component/Foooter'
import { Certificate } from './Component/Certificate'
import {NoPage} from './Component/NoPage'
import { Certificate_details } from './Component/Certificate_details'


export const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Certificate />} />
          <Route path="/certificate_details" element={<Certificate_details />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>    
    <Foooter/>
     <Header/>

<Foooter/>

    </div>
  )
}
export default App
