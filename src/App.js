import React from 'react'
import "./Css/certificate_design.css"
import { Header } from './Component/Header'
import { Foooter } from './Component/Foooter'
import { Certificate_details } from './Component/Certificate_details'


export const App = () => {
  return (
    <div>
     <Header/>
   <Certificate_details/>

<Foooter/>

    </div>
  )
}
export default App
