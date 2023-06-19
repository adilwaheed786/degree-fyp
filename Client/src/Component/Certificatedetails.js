import React from 'react';
import { useEffect, useState } from 'react';
import "../Css/certificate_details.css";
import logo from '../images/logo.png';
import Certificate from './Certificate';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const Certificatedetails = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state)
  const { data } = state;
  const{uniqueId}=state;

  const [mongodbData, setMongodbData] = useState(null);

  useEffect(() => {
    // Fetch blockchain data from MongoDB
    const fetchBlockchainData = async () => {
      try {

        const response = await axios.get(`/getdata/${uniqueId}`);
        const blockchainData = response.data;

        if (!blockchainData || Object.keys(blockchainData).length === 0) {
          window.alert('Blockchain data not found');
          return;
        }

        setMongodbData(blockchainData);
      } catch (error) {
        console.log(error);
        window.alert('Failed to retrieve blockchain data. Please try again.');
      }
    };

    fetchBlockchainData();
  }, [data.uniqueId]);
console.log(data)
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
          <div className="text">Date of Graduation: {data.dateofgraduation}</div>
          <div className="text">Department: {data.program}</div>
          <div className="text">Batch: {data.batch}</div>
          <div className="text">Program: {data.program}</div>
          <div className="text">Student Name: {data.firstname} {data.lastname}</div>
          <div className="text">Father Name: {data.fathername}</div>
          <div className="text">Enrollment No: {data.enrollment_number}</div>
          <div className="text">Registration No: {data.registration_number}</div>
        </div>
      </div>
      <h3><u>BLOCKCHAIN DATA:</u></h3>
      <div className="studentinfo" style={{ marginBottom: "20px" }}>
        <div className='info'>
          <div className='text1' style={{whiteSpace: "normal", 
  wordWrap: "break-word"}}>Transaction Hash: {mongodbData?.transactionHash}</div>
          <div className='text'>Time Stamp: {mongodbData?.timestamp}</div>
          <div className='text3'>Block Number: {mongodbData?.blockNumber}</div>
          <div className='text3'  style={{whiteSpace: "normal", 
  wordWrap: "break-word"}}>Block Hash: {mongodbData?.blockHash}</div>
          <div className='text3'>BlockChain-BlockNumber: {mongodbData?.timestamp}

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
};
