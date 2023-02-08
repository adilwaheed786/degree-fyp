import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./Css/certificate_design.css"
import { Header } from './Component/Header'
import { Foooter } from './Component/Foooter'
import { Certificate } from './Component/Certificate'
import {NoPage} from './Component/NoPage'
import Homepage from './Component/Home_page/Homepage'


export const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>    
    <Foooter/>
    </div>
  )
}
export default App
