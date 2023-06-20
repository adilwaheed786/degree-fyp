import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import StudentCertificateContract from '../../build/contracts/StudentCertificateContract.json';
import './Unique.css';
import axios from 'axios';

const UniqueeId = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Use the navigate function from useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (inputValue.length === 0) {
      setError(true);
      window.alert("Unique ID can't be empty"); // Show alert message for empty unique ID
      return;
    }
  
    try {
      // Connect to Ganache local network
      const web3 = new Web3('http://localhost:7545');
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = StudentCertificateContract.networks[networkId];
  
      // Get the contract instance
      const contractInstance = new web3.eth.Contract(
        StudentCertificateContract.abi,
        deployedNetwork && deployedNetwork.address
      );
  
      const Certificate_UniqueId = web3.utils.asciiToHex(inputValue);
      // Truncate or pad the uniqueId to 32 bytes
      const truncatedUniqueId = Certificate_UniqueId.slice(0, 66); // Example: Truncate to 66 characters
  
      // Call the contract function to get the certificate data
      const result = await contractInstance.methods
        .getCertificateDataByUUID(truncatedUniqueId)
        .call();
  
      // Make API request to retrieve blockchain data from MongoDB
      // const response = await fetch(`http://localhost:5000/getdata/${truncatedUniqueId}`);
      console.log(inputValue)
      const id=inputValue;
      const data1 = {
        uniqueId:inputValue
      };
      console.log(id)
      fetch(`/getdata/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve data from MongoDB');
        }
        return response.json();
      })
      .then(data => {
        // Handle the retrieved data
        console.log(data);
      })
      .catch(error => {
        console.error(error);
        // Handle the error
      });
    
  
      // const data = await response.json();
  
      // if (!data || Object.keys(data).length === 0) {
      //   window.alert('Invalid unique ID. Please try again.'); // Show alert message for invalid unique ID
      //   return;
      // }
  
      // if (!result || Object.keys(result).length === 0) {
      //   window.alert('Invalid unique ID. Please try again.'); // Show alert message for invalid unique ID
      //   return;
      // }
  
      // Redirect to the CertificateDetails page with the certificate data
      navigate(`/certificate_details/${inputValue}`, { state: { data: result, uniqueId: inputValue } });
   
    } catch (error) {
      console.log(error);
      window.alert('Invalid ID'); // Show alert message for other errors
    }
  };
  

  const handleRecaptcha = (value) => {
    console.log(value);
    // Value handling code
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <form onSubmit={handleSubmit}>
      
            <div className='UID-div'>
              <div className='label-div'>
                <label className='id-label'>Unique ID</label>
              </div>

              <input
        type="text"
        className='Id-input'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
              {error && inputValue.length <= 0 ? (
                <label className='errorMessage'>Unique Id Can't be empty</label>
              ) : (
                ''
              )}
            </div>
            <div className='roboo'>
              <div className='emptyy'></div>
              <div className='notRobot'>
                <ReCAPTCHA
                  className='recaptcha-container'
                  sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                  onChange={handleRecaptcha}
                />
              </div>
            </div>
            <div className='btn-div'>
              <button className='submit-btn submit-id' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UniqueeId;
