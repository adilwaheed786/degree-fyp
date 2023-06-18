import React from 'react'
import certificate from '../images/certificate.png'
import s4 from '../images/s4.png'
import logo from '../images/logo.png'
import QR from '../images/QR.png'
import "../Css/certificate_design.css"
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react'
import { useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios'
import saveAs from 'file-saver'
import Web3 from 'web3';
import StudentCertificateContract from '../build/contracts/StudentCertificateContract.json';
import QRCode from 'qrcode.react';


export const Certificate = () => {
  const location = useLocation();
  const formData = location.state;
  console.log(formData) 
  const navigate = useNavigate()
  const[updatedData, setUpdatedData] = useState(formData);
  const [storedData, setStoredData] = useState(null);
  const [uniqueId, setUniqueId] = useState('');
    // const queryParams = new URLSearchParams(location.search);
  const {
    firstname,
    lastname,
    fathername,
    enrollment,
    registration,
    program,
    batch,
    other,
    dateofgraduation,
    cgpa,
  } = formData;
  
  useEffect(() => {
    const generateUniqueId = async () => {
      const id = uuidv4();
      setUniqueId(id);

      // Generate QR code using the unique ID
      
    };

    generateUniqueId();
  }, []);
  function capitalize(str) {
    // Split the string into an array of words
    const words = str.toLowerCase().split(' ');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    // Join the capitalized words back into a string
    const capitalizedStr = capitalizedWords.join(' ');
  
    return capitalizedStr;
  }
  
  const handleGetStoredData = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = StudentCertificateContract.networks[networkId];
        const contractAddress = deployedNetwork.address;
  
        const contract = new web3.eth.Contract(
          StudentCertificateContract.abi,
          contractAddress
        );
  
        // Get the total number of stored certificates
        const totalCertificates = await contract.methods.getTotalCertificatesCount().call();
        
        console.log('Stored data from Ganache:');
        console.log(totalCertificates);

        const certificateDataArray = [];
        for (let i = 0; i < totalCertificates; i++) {
          const certificateData = await contract.methods.getCertificateDataByIndex(i).call();
          certificateDataArray.push(certificateData);
        }

        console.log(certificateDataArray);
        
      } else {
        console.error('Web3 provider not found. Make sure you have MetaMask installed.');
      }
    } catch (error) {
      console.error('Error retrieving stored data:', error);
    }
  };
  
  const handleUpload = async () => {
    try {
      // Check if the browser has web3 provider (MetaMask)
      if (window.ethereum) {
        // Create a new web3 instance
        const web3 = new Web3(window.ethereum);
  
        // Request access to the user's MetaMask accounts
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
  
        const fromAddress = accounts[0]; // Assuming the user has at least one account
  
        // Get the contract network ID
        const networkId = await web3.eth.net.getId();
  
        // Get the contract address from the JSON file
        const deployedNetwork = StudentCertificateContract.networks[networkId];
        const contractAddress = deployedNetwork.address;
  
        // Create an instance of the contract
        const contract = new web3.eth.Contract(
          StudentCertificateContract.abi,
          contractAddress
        );
        const Certificate_UniqueId = web3.utils.asciiToHex(uniqueId);
        // Truncate or pad the uniqueId to 32 bytes
        const truncatedUniqueId = Certificate_UniqueId.slice(0, 66); // Example: Truncate to 66 characters

        // Call the contract's addStudentDetails function
        const transact= await contract.methods.addStudentDetails(
          truncatedUniqueId,
          capitalize(firstname),
          capitalize(lastname),
          program,
          capitalize(fathername),
          other,
          enrollment,
          registration,
          batch,
          cgpa,
          dateofgraduation
        ).send({ from: fromAddress })
        .on('error', (error) => {
          if (error.message.includes("Certificate with this ID already exists")) {
              alert("A certificate with this ID already exists. Please choose a different ID.");
          }
          else if (error.message.includes("Duplicate enrollment number")) {
            alert("A certificate with this enrollment number already exists. Please choose a different enrollment number.");
        }
        else if (error.message.includes("Duplicate registration number")) {
          alert("A certificate with this registration number already exists. Please choose a different registration number.");
      }
           else {
              // Handle other errors or display a generic error message
              console.error(error);
              alert("An error occurred while adding the student details.");
          }
      })
      .then(async (transaction) => {
        console.log(transaction)
          // Transaction successful, handle the receipt
          if (transaction.transactionHash) {
            console.log('Student details added to the blockchain.');
             // Get the total number of stored certificates
             const certificate = await contract.methods.getCertificateDataByUUID(truncatedUniqueId).call();
             console.log(certificate) ;
            const Eth = await web3.eth.getTransaction(transaction.transactionHash);
            const block = await web3.eth.getBlock(transaction.blockHash);
            console.log(Eth) ;
            console.log(block) ;
            console.log('Transaction ID:', Eth.hash);
            console.log('Block Number:', Eth.blockNumber);
            console.log('Timestamp:', block.timestamp);
            try {
              const data = {
                uniqueId:uniqueId,
                transactionHash: Eth.hash,
                blockNumber: Eth.blockNumber,
                blockHash:Eth.blockHash,
                timestamp: block.timestamp
              };
              console.log(data)
    
              // Make POST request to the server endpoint
              const response = await axios.post('/saveData', data);
              console.log(response.data); // Log the response
              axios.post('/create-pdf',{ firstname,
                lastname,
                program,
                dateofgraduation,
                cgpa })
               .then(() => axios.get('/fetch-pdf', {responseType: 'blob'}))
               .then((res) =>{
                 const pdfBlob = new Blob([res.data],{type:'application/pdf'});
                 saveAs(pdfBlob,'newpdf.pdf')
                 
                 console.log('pdf ban gai hai aur download hau gai hai')
           
               })
               .catch((err) => {
                 console.log(err);
               });
            } catch (error) {
              console.error('Error:', error);
              // Handle the error
              // ...
            }
          }
      });;
         
      
      } else {
        console.error('Web3 provider not found. Make sure you have MetaMask installed.');
      }
    } catch (error) {
      console.error('Error adding student details:', error);
    }
  };
  
  const handleUpdate = () => {
    
    navigate('/student-certificate', { state: updatedData });
  };

  const getAbbreviation = (text) => {
    const prepositions = ['of', 'in', 'on', 'at', 'for', 'to', 'by', 'with'];

    // Split the text into words
    const words = text.split(' ');

    // Filter out prepositions
    const filteredWords = words.filter((word) => !prepositions.includes(word.toLowerCase()));

    // Map each remaining word to its first letter and capitalize it
    const abbreviation = filteredWords
      .map((word) => word.charAt(0).toUpperCase())
      .join('');

    return abbreviation;
  };

  
  return (
    <div>
      {/* ------heading with some text code start */}
      <div className="preview">
        <h1 style={{ fontWeigt: "bolder" }}><b> PREVIEW STUDENT'S DEGREE</b>
        </h1>
        <p style={{ color: "black", }}>If you are confident in the accuracy of a student's marks, enter the marks into the blockchain. If any updates are necessary, make the necessary adjustments to the student's marks.</p>
      </div>
      {/* ------heading with some text code end */}


      {/* ------Certificate code start */}
      <div className='certificate' >
    
        <div className='certimg'>
          <img src={certificate} alt="" class="certimg" style={{
            width: "70%",
            maxHeight: "auto",
            height: "auto",
            border: "2px solid black"
          }} />

          <div className='Certcontent'>
            <h4 style={{ marginTop: "10px" }}>BAHRIA UNIVERSITY</h4>
            <img src={logo} alt="" style={{
              maxwidth: "100px",
              height: "10%",
              maxheight: "100px",
              width: "10%",
            }} />
            <p class="bahria">BAHRIA AND FACULTY OF UNIVERSITY HAVE GRANTED TO </p>
            <h5 style={{textTransform: 'capitalize'}}>{firstname + " " + lastname}</h5>
            <h5 style={{textTransform: 'Uppercase'}}>{program}</h5>
            <p>CGPA: {cgpa}</p>


            <p>WITH ALL THE RIGHTS AND PRIVILIGES THERES TO</p>


            <div className='sealdiv'>
            <p>Date Of Graduation: {dateofgraduation} </p>

              <img src={s4} alt="" style={{
                maxwidth: "100px",
                height: "auto",
                maxheight: "100px",
                width: "10%",
              }} />
              {/* <p>SIGNATURE:</p> */}
            </div>


            <div className='sealdiv' style={{display: 'flex', justifyContent:"center", alignItems: 'center'}}>

            <QRCode value={uniqueId} style={{
                maxwidth: "100px",
                height: "auto",
                maxheight: "50px",
                width: "5%",
              
              }}/>

            <p>UNIQUE ID: {uniqueId}</p>
            </div>

          </div>
        </div>

        {/* --------buttons code start */}
        <div className="buttons">

       <button type="button" class="btn btn-outline-primary" onClick={handleGetStoredData}>
        Get Stored Data
      </button>
          <button type="button" class="btn btn-outline-primary" onClick={handleUpdate}>Update</button>
          <button type="button" class="btn btn-outline-primary" onClick={handleUpload}>Upload</button>
        </div>
        {/* --------buttons code end */}


      </div>

      {/* -------Certificate div end */}

    </div>
  )
}
export default Certificate;
