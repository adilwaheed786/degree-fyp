
import React, { useState } from 'react';
import image from '../../images/Rectangleimage.png'
import Webcam from 'react-webcam';



const QrCode = () => {
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
  return (
    <div>
      <div className='container midComponent'>
        <div className='row'>
          <div className='.col-6 QR-image'>
            {
              ShowImage ? (
                <img src={image} alt='img'></img>
              ) : null
            }
            {cameraState ? (
              <Webcam className='webCam' />
            ) : null}
          </div>
        </div>
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
        </div>
      </div>
    </div>
  )
}

export default QrCode