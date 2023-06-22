import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png';
import '../Css/certificate_details.css';

import "../Css/particle.css"

// Import the web3 library and the contract ABI
import Web3 from 'web3';
import StudentCertificateContract from '../build/contracts/StudentCertificateContract.json'

export const Certificatedetails = () => {
  const location = useLocation();
  const { state } = location;
  const uniqueIdFromUrl = location.pathname.split('/').pop();
  const [data, setData] = useState(state?.data || {});
  const [uniqueId, setUniqueId] = useState(uniqueIdFromUrl);
  const [mongodbData, setMongodbData] = useState(null);
  const [blockchainData, setBlockchainData] = useState(null); // Store the blockchain data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  useEffect(() => {
    const fetchBlockchainData = async () => {
      try {
        setLoading(true); // Show the loading screen
        // Fetch blockchain data from MongoDB using the uniqueId
        const response = await axios.get(`/getdata/${uniqueId}`);
        const blockchainData = response.data;

        if (!blockchainData || Object.keys(blockchainData).length === 0) {
          window.alert('Blockchain data not found');
          setLoading(false); // Show the loading screen
          return;
        }

       
        setLoading(true); // Show the loading screen
    // Connect to the Ganache network
    const provider = new Web3.providers.HttpProvider('http://localhost:7545');
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = StudentCertificateContract.networks[networkId];
    const contractAddress = deployedNetwork.address;

    const contract = new web3.eth.Contract(
      StudentCertificateContract.abi,
      contractAddress
    );
    const certificateUniqueId = web3.utils.asciiToHex(uniqueIdFromUrl);
    const truncatedUniqueId = certificateUniqueId.slice(0, 66);

    // Call the contract function to get the certificate data
    const result = await contract.methods
      .getCertificateDataByUUID(truncatedUniqueId)
      .call().then((result) => {
        console.log("Success")
        setLoading(false); // Hide the loading screen
        setBlockchainData(result);
        setMongodbData(blockchainData);
        setSuccess("Degree Details Is Verified From BlockChain")
      })
      .catch((error) => {
        console.error(error);
        console.log("Eroor")
        setLoading(false); // Hide the loading screen
        setError('An error occurred. Please try again later.');
        // Handle any error that occurred during the contract method call
      });
    
    //   setLoading(false); // Show the loading screen
    // setBlockchainData(result);
    // setSuccess("Degree Details Is Verified From BlockChain")
  } catch (error) {
    console.log(error);
    setLoading(false);
    //setBlockchainData(null);
    setError('An error occurred. Please try again later.');
    
    //window.alert('Failed to retrieve blockchain data. Please try again.');
  }
};

fetchBlockchainData();
}, [uniqueId]);
if (loading) {
  return (
    <div className="loading-container">
      <div className="loading-text ">Loading Please Wait...</div>
    </div>
  );
}
  return (
    <div>
      {/* ------heading with some text code start */}
      <div className="HEADING">
        <img
          src={logo}
          alt=""
          className="logo"
          style={{
            height: "auto",
            width: "100px",
          }}
        />
         {error && (
        
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {success && (
        
        <div className="alert alert-success" role="success">
          {success}
        </div>
      )}
        <h2 style={{ fontWeight: "bolder", fontSize: "40px" }}>
          <b>BAHRIA UNIVERSITY</b>
        </h2>
        <p style={{ fontWeight: "bolder", fontSize: "30px" }}>
          <b><u>DEGREE VERIFICATION INFORMATION</u></b>
        </p>
      </div>
      {/* ------heading with some text code end */}
      <h3><u>STUDENT DATA:</u></h3>
      <div className="studentinfo">
        <div className='info'>
        <div className="text" ><b>Student Name:</b> {blockchainData?.studentname}</div>
          <div className="text"><b>Father Name:</b> {blockchainData?.fathername}</div>
          <div className="text"><b>Enrollment No: </b>{blockchainData?.enrollment_number}</div>
          <div className="text"><b>Registration No: </b>{blockchainData?.registration_number}</div>
          <div className="text"><b>Date of Graduation: </b>{blockchainData?.dateofgraduation}</div>
          <div className="text"style={{whiteSpace: "normal", 
  wordWrap: "break-word"}}><b>Campus: </b>{blockchainData?.campus}</div>
          <div className="text"><b>Batch: </b>{blockchainData?.batch}</div>
          <div className="text" style={{whiteSpace: "normal", 
  wordWrap: "break-word"}}><b>Program: </b>{blockchainData?.program}</div>
         
        </div>
      </div>
      <h3><u>BLOCKCHAIN DATA:</u></h3>
      <div className="studentinfo" style={{ marginBottom: "20px" }}>
        <div className='info'>
          <div className='text1' style={{whiteSpace: "normal", 
  wordWrap: "break-word"}}><b>Transaction Hash:</b> {mongodbData?.transactionHash}</div>
          <div className='text'><b>Time Stamp:</b> {mongodbData?.timestamp}</div>
          <div className='text3' style={{whiteSpace: "normal", 
  wordWrap: "break-word"}}><b>Document Hash:</b> {blockchainData?.documentHash}</div>
          <div className='text3'  style={{whiteSpace: "normal", 
  wordWrap: "break-word"}}><b>Block Hash:</b> {mongodbData?.blockHash}</div>
          <div className='text3'><b>BlockChain-BlockNumber: </b>{mongodbData?.blockNumber}

          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          {/* Certificate component */}
        </div>
      </div>
    </div>
  );
}
        
