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
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorIdEmpty, setErrorIdEmpty] = useState(null);
  const navigate = useNavigate(); // Use the navigate function from useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue.length)
    if (inputValue.length === 0) {
      console.log("nique ID can't be empty")
      setErrorIdEmpty("Unique ID can't be empty");
     // window.alert("Unique ID can't be empty"); // Show alert message for empty unique ID
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
      try {
        var result = await contractInstance.methods.getCertificateDataByUUID(truncatedUniqueId).call();
        // Handle the result when the certificate exists
        console.log(result);
        // Perform any other actions with the result
      } catch (error) {
        if (error.message.includes("Certificate with this ID does not exist")) {
          setErrorMessage("A certificate with this ID does not exist. Please choose a different ID.")
         // alert("A certificate with this ID does not exist. Please choose a different ID.");
        return;
        } else {
          // Handle other errors or display a generic error message
          console.error(error);
          alert("An error occurred while adding the student details.");
        }
      }

      // Make API request to retrieve blockchain data from MongoDB
      // const response = await fetch(`http://localhost:5000/getdata/${truncatedUniqueId}`);
      console.log(inputValue)
      const id = inputValue;
      const data1 = {
        uniqueId: inputValue
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

        navigate(`/certificate_details/${inputValue}`, { state: { data: result, uniqueId: inputValue } });

    } catch (error) {
      console.log(error);
      window.alert('Exception Occurs!! '); // Show alert message for other errors
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

            <div className='UID-div m-2'>
              <div className='label-div'>
                <label className='id-label'>Unique ID</label>
              </div>

              <input
                type="text"
                className='Id-input'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            {/* <div className='roboo'>
              <div className='emptyy'></div>
              <div className='notRobot'>
                <ReCAPTCHA
                  className='recaptcha-container'
                  sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                  onChange={handleRecaptcha}
                />
              </div>
            </div> */}
            {errorIdEmpty && inputValue.length <= 0 ?(
                <div className="alert alert-danger m-3 text-center" role="alert">
                  {errorIdEmpty}
                </div>
              ): (
                ''
              )}
              {errorMessage && inputValue.length > 0 ?(
                <div className="alert alert- m-3 text-center" role="alert">
                  {errorMessage}
                </div>
                ): (
                ''
              )}
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
