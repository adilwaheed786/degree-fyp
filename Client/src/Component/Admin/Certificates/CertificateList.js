import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './certificates.css'
import StudentCertificateContract from '../../../build/contracts/StudentCertificateContract.json';
function CertificateList() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = StudentCertificateContract.networks[networkId];
        const contractAddress = deployedNetwork.address;
  
        const contract = new web3.eth.Contract(
          StudentCertificateContract.abi,
          contractAddress
        );
        // Assuming you have already connected to the Ethereum network and instantiated the contract object
        const certificateList = await contract.methods.getAllCertificates().call();
       // const totalCertificates = await contract.methods.getTotalCertificatesCount().call();
        console.log(certificateList);
        setCertificates(certificateList);
      } catch (error) {
        console.log('Error fetching certificates:', error);
      }
    }

    fetchCertificates();
  }, []); // Empty dependency array to run the effect only once on component mount
  return (
    <div className="certificate-list-container">
      <h1 className="certificate-list-title">Certificates List</h1>
      <ul className="certificate-list">
        {certificates.map((certificate, index) => (
          <li key={index} className="certificate-item">
            <div className="certificate-details">
              <p className="certificate-info">
                <strong>First Name:</strong> {certificate.firstname}
              </p>
              <p className="certificate-info">
                <strong>Last Name:</strong> {certificate.lastname}
              </p>
              <p className="certificate-info">
                <strong>Father Name:</strong> {certificate.fathername}
              </p>
              <p className="certificate-info">
                <strong>Program: </strong> {certificate.program}
              </p>
              <p className="certificate-info">
                <strong>Enrollment #:</strong> {certificate.enrollment_number}
              </p>
              <p className="certificate-info">
                <strong>Registration #:</strong> {certificate.registration_number}
              </p>
              <p className="certificate-info">
                <strong>Campus:</strong> {certificate.campus}
              </p>
              <p className="certificate-info">
                <strong>Batch:</strong> {certificate.batch}
              </p>
              <p className="certificate-info">
                <strong>CGPA:</strong> {certificate.cgpa}
              </p>
              <p className="certificate-info">
                <strong>Date Of Graduation:</strong> {certificate.dateofgraduation}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
 
}

export default CertificateList;
