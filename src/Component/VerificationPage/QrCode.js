
import React, { useState } from 'react';
import image from '../../images/Rectangleimage.png'
import Webcam from 'react-webcam';
import QrReader from "react-qr-reader";



const QrCode = () => {
  const [selected, setSelected] = useState("environment");
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [ShowImage, setShowImage] = useState(true)
  const [cameraState, setCameraState] = useState(false);
  const startCamera = () => {
    setShowImage(false)
    setCameraState(true);
  };
  const stopCamera = () => {
    setShowImage(true)
    setCameraState(false);
  };
  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setLoadingScan(false);
      // Generate the link based on the scanned data
    const link = generateLink(scanData); // Replace `generateLink` with your link generation logic
    // Redirect to the generated link
    window.location.href = link;
    }
  };
  const generateLink = (scanData) => {
    // Here, you can implement your logic to generate the link based on the scanData
    // For example, you can append the scanData to a base URL or use it as a query parameter
    const baseUrl = "http://localhost:3000/";//For Local
    const link = `${baseUrl}certificate_details/${encodeURIComponent(scanData)}`;
  
    return link;
  };
  const handleError = (err) => {
    console.error(err);
    setError('An error occurred. Please try again later.')
  };
  return (
    <div>
      <div className='container midComponent'>
        <div className='row'>
        <div className='.col-6 turnOnCamera'>
            <button  onClick={startCamera}
             className={`submit-btn ${cameraState ? 'displaycamera-btn': ''}`}>
              Turn On Camera
            </button>
            <button className={`submit-btn ${cameraState ? '': 'offcamera-btn'}`} onClick={stopCamera}>
              Turn Off Camera
            </button>
            </div>
          <div className='.col-6 QR-image'>
            {
              ShowImage ? (
                <img src={image} alt='img'></img>
              ) : null
            }
            {/* {cameraState ? (
              <Webcam className='webCam' />
            ) : null} */}
          </div>
        </div>
        {error && !ShowImage &&(
        
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
        <div className='row'>
          <div className='.col-6 turnOnCamera'>
              
      {cameraState && (
        <>
        <br></br>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>        
        </>
      )}
      
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{data}</p>}
          </div>
        </div>

        <div className='row d-flex justify-content-center'> 
        <div className='col d-flex justify-content-center' >
        {cameraState && (  <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "300px" }}
          />)}
        </div>
        </div>
      </div>
    </div>
  )
}

export default QrCode
