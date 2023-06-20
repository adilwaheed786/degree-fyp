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
  useEffect(() => {
    const fetchBlockchainData = async () => {
      try {
        // Fetch blockchain data from MongoDB using the uniqueId
        const response = await axios.get(`/getdata/${uniqueId}`);
        const blockchainData = response.data;

        if (!blockchainData || Object.keys(blockchainData).length === 0) {
          window.alert('Blockchain data not found');
          return;
        }

        setMongodbData(blockchainData);

        // Connect to the blockchain network
        if (window.ethereum) {
          await window.ethereum.enable();
          const web3 = new Web3(window.ethereum);
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = StudentCertificateContract.networks[networkId];
          const contract = new web3.eth.Contract(
            StudentCertificateContract.abi,
            deployedNetwork && deployedNetwork.address        );
const Certificate_UniqueId = web3.utils.asciiToHex(uniqueIdFromUrl);
// Truncate or pad the uniqueId to 32 bytes
const truncatedUniqueId = Certificate_UniqueId.slice(0, 66); // Example: Truncate to 66 characters

// Call the contract function to get the certificate data
const result = await contract.methods
  .getCertificateDataByUUID(truncatedUniqueId)
  .call();

// Call the contract function to get the certificate data

  
            setBlockchainData(result);
            
          } else {
            console.log('Please install MetaMask or use a web3-enabled browser');
          }
        } catch (error) {
          console.log(error);
         
          window.alert('Failed to retrieve blockchain data. Please try again.');
        }
      };
  
      fetchBlockchainData();
    }, [uniqueId]);


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
        <div className="text" ><b>Student Name:</b> {blockchainData?.firstname} {data.lastname}</div>
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
          <div className='text3'><b>Block Number:</b> {mongodbData?.blockNumber}</div>
          <div className='text3'  style={{whiteSpace: "normal", 
  wordWrap: "break-word"}}><b>Block Hash:</b> {mongodbData?.blockHash}</div>
          <div className='text3'><b>BlockChain-BlockNumber: </b>{mongodbData?.timestamp}

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
        
