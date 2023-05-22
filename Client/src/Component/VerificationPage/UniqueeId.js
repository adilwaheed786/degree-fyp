import React from 'react'
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Unique.css'
// import Roboimage from '../../images/NotaRobot.png';

const UniqueeId = () => {

  const [inputValue, setInputVlaue] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
      event.preventDefault();
      if (inputValue.length === 0) {
          setError(true);
      }
  }

  const handleRecaptcha = (value) => {
      console.log(value);
      // value ke saath kuchh karein, jaise ki form submit karein
  }

  return (
    <div className='container'>
      <div className='row'>
       <div className='col-12'>
        <form onSubmit={handleSubmit}>
          <div className='UID-div'>
            <div className='label-div'>
            <label className='id-label'>Unique ID</label>
            </div>
            
            <input type='text' className='Id-input' value={inputValue} onChange={e => setInputVlaue(e.target.value)}></input>
              {
                     error && inputValue.length <= 0 ? <label className='errorMessage'>Unique Id Can't be empty</label> : ""
              }
          </div>
          <div className='roboo'>
          <div className='emptyy'></div>
          <div className='notRobot'>
          <ReCAPTCHA className='recaptcha-container'
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                       onChange={handleRecaptcha}
              />
          </div>
          </div>
          <div className='btn-div'>
               <button className='submit-btn submit-id'>Submit</button>
          </div>
        </form>
        </div> 
        {/* <form>
          <table className='table-id'>
            <tr className='UID-input'>
              <td><label>Unique ID</label></td>
              <td><input type="text"></input></td>
            </tr>

            <tr>
              <td></td>
              <td>
              <div className='Robot-checkbox'>
                  <input type='checkbox' value='true'></input>
                  <label>I am Not a Robot</label>
                  <img src={Roboimage}></img>
              </div>
              </td>
            </tr>

            <tr>
              <td className='empty'></td>
              <td> 
              <button className='submit-btn'>Submit</button>
              </td>
            </tr>

          </table>
        </form> */}
      </div>
    </div>
  )
}

export default UniqueeId
          // <div className='UID-input'>
          //   <div className='label'>
          //     <label>Unique ID</label>
          //   </div>
          //   <div className='label'>
          //     <input type='text'></input>
          //   </div>
          // </div>
          // 
          // <button className='submit-btn'>Submit</button>