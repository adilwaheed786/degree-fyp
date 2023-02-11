import React from 'react'
import datapic from '../../images/Data.png'

function Banner() {
  return (
    <div>
      <div className='container-fluid Banner'>
        <div className='row Banner-row'>

          <div className='col-sm-6 BannerColumn1'>
            <div className='Banner-heading'>
            <h2>Document Verification</h2>
            <p>Document verification via blockchain refers to the 
              process of authenticating and verifying the authenticity of 
               a document using a decentralized, secure, and transparent ledger technology.
               This process helps to eliminate the risk of tampering
               or fraud and enables secure storage, sharing, and transfer of 
               sensitive and critical information.</p>
            </div>
          </div>
          
          <div className='col-sm-6 BannerColumn2'>
            <div className='data_image'>
              <img src={datapic}></img>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner