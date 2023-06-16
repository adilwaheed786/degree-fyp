import React from 'react'
import certificate from '../images/certificate.png'
import s4 from '../images/s4.png'
import logo from '../images/logo.png'
import QR from '../images/QR.png'
import "../Css/certificate_design.css"
import { useState } from 'react'
import { useLocation,useNavigate} from 'react-router-dom';
import Web3 from 'web3';
import StudentCertificateContract from '../build/contracts/StudentCertificateContract.json';


export const Certificate = () => {
  const location = useLocation();
  const formData = location.state;
  // console.log(formData)
  // debugger;
  const navigate = useNavigate()
  const[updatedData, setUpdatedData] = useState(formData);
  const [storedData, setStoredData] = useState(null);

  // const queryParams = new URLSearchParams(location.search);
  const {
    firstname,
    lastname,
    fathername,
    enrollment,
    registration,
    program,
    batch,
    dateofgraduation,
    cgpa,
  } = formData;
  // const firstname = queryParams.get('firstname');
  
  // console.log('hey')
  // console.log(firstname)
  // const lastname = queryParams.get('lastname');
  // const fathername = queryParams.get('fathername');
  // const enrollment = queryParams.get('enrollment');
  // const registration = queryParams.get('registration');
  // const program = queryParams.get('program');
  // const batch = queryParams.get('batch');
  // const dateofgraduation = queryParams.get('dateofgraduation');
  // const cgpa = queryParams.get('cgpa');
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
        const totalCertificates = await contract.methods.getTotalCertificates().call();
        
        console.log('Stored data from Ganache:');
        console.log(totalCertificates);
        // Loop through each certificate and retrieve its data
        // for (let i = 0; i < totalCertificates; i++) {
        //   const certificateData = await contract.methods.getCertificateData(i).call();
        //   console.log(certificateData)
        //   console.log('Certificate', i + 1);
        //   console.log('First Name:', certificateData.firstname);
        //   console.log('Last Name:', certificateData.lastname);
        //   console.log('Program:', certificateData.program);
        //   console.log('CGPA:', certificateData.cgpa);
        //   console.log('Date of Graduation:', certificateData.dateofgraduation);
        //   console.log('----------------------------------------');
        // }

        const certificateDataArray = [];
        for (let i = 0; i < totalCertificates; i++) {
          const certificateData = await contract.methods.getCertificateData(i).call();
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
  
        // Call the contract's addStudentDetails function
        const transaction= await contract.methods.addStudentDetails(
          firstname,
          lastname,
          program,
          cgpa,
          dateofgraduation
        ).send({ from: fromAddress });
        console.log(transaction) ; 
        console.log('Student details added to the blockchain.');
      } else {
        console.error('Web3 provider not found. Make sure you have MetaMask installed.');
      }
    } catch (error) {
      console.error('Error adding student details:', error);
    }
  };
  
  const handleUpdate = () => {
    debugger
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
              <p>SIGNATURE:</p>
            </div>


            <div className='sealdiv'>

              <img src={QR} alt="" style={{
                maxwidth: "100px",
                height: "auto",
                maxheight: "50px",
                width: "5%",
              }} />
              <p>UNIQUE ID:223431RETERTY6Y67U6778IWDWWRDGHY34</p>
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
