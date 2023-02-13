import React from 'react'
import "../Css/certificate_details.css"
import logo from '../images/logo.png'
export const Certificatedetails = () => {
  return (
    <div >
         {/* ------heading with some text code start */}
         
      <div className="HEADING">
      <img src={logo} alt="" className="logo"style={{
              height:"auto",
         width:"100px"
            }} />
        <h2 style={{ fontWeigt: "bolder",fontSize:"40px" }}><b> BAHRIA UNIVERISTY</b>
        </h2>
    
        <p style={{ fontWeigt: "bolder" ,fontSize:"30px"}}><b> <u>DEGREE VERIFICATION INFORMATION</u></b>
        </p>
        
      </div>
       {/* ------heading with some text code end */}
       <h3><u>STUDENT DATA:</u></h3>
      <div className="studentinfo">
            <div className='info'>
                <div className='text' >Date of Graduation:12/2233</div>
                <div className='text' >Department:Software Engineering</div>
                <div className='text' >Batch:2013</div>
                <div className='text' >Program:BSE</div>
                <div className='text' >Student Name:Sumayya</div>
                <div className='text' >Father Name:Khalid</div>
                <div className='text' >Enrollnment no:02-131192-045</div>
                <div className='text' >Registration no:65163</div>
            </div>
        </div>
        <h3> <u>BLOCKCHAIN DATA:</u></h3>
        <div className="studentinfo" style={{marginbottom:"20px"}}>
            <div className='info'>
                <div className='text1' >Document Hash:93439er9ie9riefdfmdsfdfsfgg</div>
                <div className='text' >Time Stamp:434563:242:2425</div>
                <div className='text3' >Public URL:837874udfndnfdff</div>
                <div className='text3' >Public Key:ereru848455555gfgggggggg</div>
                <div className='text3' >BlockChain-BlockNumber:wiuei993i2jmdffggfg56767</div>
               
            </div>
        </div>
     <div className='row'>
        <div className='col'>
            
        </div>
     </div>
    </div>
  )
}
