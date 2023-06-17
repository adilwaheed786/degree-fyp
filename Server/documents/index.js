module.exports = (firstname, lastname, program, cgpa, dateofgraduation) =>{
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Testing</title>
      <style>
          
      </style>
  </head>
  
  <body style="background: #FFFFFF;
  margin: auto;
  width: 100%;
  height: auto;">
      <div class="certificate" style=" margin-top: 2%;
      top: 5%;
      display: flex;
      align-items: center;
      position: relative;
      align-content: center;
      justify-content: center;
      flex-wrap: nowrap;">
          <div class="certimg" style="position: relative;
          width: 70%;
          max-height: auto;
          height: auto;
          border: 2px solid black;">
              <img src="https://github.com/adilwaheed786/degree-fyp/blob/master/src/images/certificate.png?raw=true"
                  alt="certificate" class="certificateimage" style="width: 100%; max-height: auto; height: auto;">
              <div class="Certcontent" style="   position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              padding: 20px;
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;">
                  <h4 style="margin-top: 10px;  font-weight: bolder;
                  font-size: 2.5vw;
                  white-space: nowrap;">BAHRIA UNIVERSITY</h4>
                  <img src="images/logo.png" alt=""
                      style="max-width: 100px; height: 10%; max-height: 100px; width: 10%;" />
                  <p class="bahria" style="margin-top: 10px;">BAHRIA UNIVERSITY HAVE GRANTED THIS CERTIFICATE TO</p>
                  <h5 style="text-transform: capitalize; font-weight: bold;
                  font-size: 1.5vw;">${firstname} ${lastname}</h5>
                  <p class="bahria" style="margin-top: 10px">FOR THE DEGREE PROGRAM OF</p>
                  <h5 style="text-transform: uppercase;font-weight: bold;
                  font-size: 1.5vw;">${program}</h5>
                  <p style="white-space: nowrap;
                  font-size: 1.25vw;
                  margin: 1%;">CGPA: ${cgpa}</p>
  
                  <p>WITH ALL THE RIGHTS AND PRIVILEGES THERETO</p>
                  <div class="sealdiv">
                      <p>Date Of Graduation: ${dateofgraduation}</p>
                      <img src="images/s4.png" alt=""
                          style="max-width: 100px; height: auto; max-height: 100px; width: 10%;" />
                      <p>SIGNATURE:</p>
                  </div>
                  <div class="sealdiv">
                      <img src="images/QR.png" alt=""
                          style="max-width: 100px; height: auto; max-height: 50px; width: 5%;" />
                      <p style="display: inline;">UNIQUE ID: 223431RETERTY6Y67U6778IWDWWRDGHY34</p>
                  </div>
              </div>
          </div>
  
      </div>
  </body>
  
  </html>
  `
}
