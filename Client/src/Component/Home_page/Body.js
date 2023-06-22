import React from "react";
import pic1 from "../../images/Jhaal1.png";
import pic2 from "../../images/Jhaal2.png";
import arrow from "../../images/Arrow.png";
import { useCallback, useState, useRef } from "react";
import { Navigate, useHistory, useNavigate }  from 'react-router-dom';
import axios from "axios";
import { useDropzone } from "react-dropzone";
import Web3 from 'web3';
import StudentCertificateContract from '../../build/contracts/StudentCertificateContract.json';

const Body = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [hash, setHash] = useState("");
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [valid, setValid] = useState(false);
  const [notvalid, setNotValid] = useState(null);
  const handleDrop = useCallback((acceptedFiles) => {
    setPdfFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: "application/pdf",
    multiple: false,
  });

  const handleClick = () => {
    inputRef.current.click();
    setNotValid(false);
    setValid(false);
  };

  const navigate =useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setNotValid(false);
    setValid(false);
    if (!pdfFile) {
      console.error("No PDF file selected");
      return;
    }

    const formData = new FormData();
    formData.append("pdfFile", pdfFile);

    try {
      setError(null)
      // Send the POST request to the server
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Handle the response from the server
      if (response.status === 200) {
       const documenthash=`${response.data.hash}`;
       console.log("Hash:", documenthash); // Print hash value in the console
       setHash(documenthash);
       try {
        //const web3 = new Web3(window.ethereum);
       // Connect to the local Ethereum network provided by Ganache
        const ganacheUrl = 'http://localhost:7545';
        const web3 = new Web3(ganacheUrl);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = StudentCertificateContract.networks[networkId];
        const contractAddress = deployedNetwork.address;
  
        const contract = new web3.eth.Contract(
          StudentCertificateContract.abi,
          contractAddress
        );
        setLoading(true); // Show the loading screen
        // Assuming you have already connected to the Ethereum network and instantiated the contract object
        const Verified = await contract.methods.verifyDocumentHash(documenthash).call();
       // const totalCertificates = await contract.methods.getTotalCertificatesCount().call();
       console.log("First"+Verified)
       if(Verified){
          setValid(true)
        }
        else{
          setNotValid(true)
        } 
       console.log(Verified);
        setLoading(false); // Hide the loading screen
      } catch (error) {
        setLoading(false);
        console.log('Error fetching certificates:', error);
        setError('An error occurred. Please try again later.');
      }
       setLoading(false);
      }
      else {

        console.error("Upload failed:", response.data);
        setError('Upload Failed')
      }
      

    } catch (error) {
      // Handle any errors
      console.error("Error uploading PDF file:", error);
      setError('Error uploading PDF file:');
    }
  };
 
  return (
    <div className="row body-row">
      <div className="col-md-2 column1">
        <img src={pic1} alt="IMG"></img>
      </div>
      <div className="col-md-4 column2">
        <div className="small_banner">
          <h4>Verify it with various other Techniques</h4>
          <button className="getStarted_btn">
            Get Started
            <div className="arrow-image">
              <img src={arrow} alt="IMG"></img>
            </div>
          </button>
        </div>
      </div>
      <div className="col-md-4 column3">
        <div className="upload">
          <h2>Upload Document</h2>
          <form onSubmit={handleSubmit}>
            <div {...getRootProps()} onClick={handleClick}>
              <input
                {...getInputProps()}
                ref={inputRef}
                style={{ display: "none" }}
              />
              {isDragActive ? (
                <p>Drop the PDF file here ...</p>
              ) : (
                <p>
                  {pdfFile
                    ? `Selected file: ${pdfFile.name}`
                    : "Drag and drop a PDF file here, or click to select a file"}
                </p>
              )}
            </div>
            <div className="upload_btn">
              <button
                type="submit"
                className={pdfFile ? "upload-btn-after" : "upload-btn"}
                disabled={!pdfFile}
              >
                Upload Degree File
              </button>
            </div>
            {loading && (     
      <div className="alert alert-primary m-2" role="alert">
      <div >Loading Please Wait...</div>
      </div>
      )}
      {error && (       
        <div className="alert alert-danger m-2" role="alert">
          {error}
        </div>
      )}
      {valid && (       
        <div className="alert alert-success m-2" role="alert">
        <div >Degree  Is Verified From BlockChain</div>
        </div>
      )}
      {notvalid && (       
        <div className="alert alert-danger m-2" role="alert">
        <div >OOP! Degree  Is Not Verified From BlockChain</div>
        </div>
      )}
          </form>
        </div>
      </div>
      <div className="col-md-2 column4">
        <img src={pic2} alt="IMG"></img>
      </div>
    </div>
  );
};

export default Body;

