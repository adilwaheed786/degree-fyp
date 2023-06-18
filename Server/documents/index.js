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
      top: 0%;
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
          ">
              <img src="https://github.com/adilwaheed786/degree-fyp/blob/master/src/images/certificate.png?raw=true"
                  alt="certificate" class="certificateimage" style="width: 1200px; max-height: auto; height: 1300px;border: 2px solid black;">
              <div class="Certcontent" style="   position: absolute;
              top: 10%;
              left: 40%;
              transform: translate(-50%, -50%);
              padding: 20px;
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;">
                  <h4 style="margin-top: 10px;  font-weight: bolder;
                  white-space: nowrap; font-size:50px">BAHRIA UNIVERSITY</h4>
                  <img src="https://github.com/adilwaheed786/degree-fyp/blob/master/src/images/logo.png?raw=true" alt="" style="max-width: 117px;max-height: 129px;width: 100%; margin-left:30%">
                  <p class="bahria" style="margin-top: 10px;font-size:20px; white-space: nowrap;">BAHRIA UNIVERSITY HAVE GRANTED THIS CERTIFICATE TO</p>
                  <h5 style="text-transform: capitalize; font-weight: bold; font-size:30px;white-space: nowrap;margin-left:30%;
                  ">${firstname} ${lastname}</h5>
                  <p class="bahria" style="margin-top: 10px; font-size:20px; white-space: nowrap; margin-left:20%">FOR THE DEGREE PROGRAM OF</p>
                  <h5 style="text-transform: uppercase;font-weight: bold; font-size:30px; white-space: nowrap;
                  ">${program}</h5>
                  <p style="white-space: nowrap;
                  margin: 1%; font-size:30px; margin-left:30%"; font-weight:bold>CGPA: ${cgpa}</p>
  
                  <p style="font-size:25px; white-space: nowrap;">WITH ALL THE RIGHTS AND PRIVILEGES THERETO</p>
                  <div class="sealdiv">
                      <p style="font-size:25px; margin-left:20%">Date Of Graduation: ${dateofgraduation}</p>
                      <img src="https://github.com/adilwaheed786/degree-fyp/blob/master/src/images/s4.png?raw=true" alt=""
                          style="  max-width: 100px; height: auto; width: 25%; margin-left:32%" />
                      <p style=" font-size:25px;margin-left:30%">SIGNATURE:</p>
                  </div>
                  <div class="sealdiv">
                      <img src="https://github.com/adilwaheed786/degree-fyp/blob/master/src/images/QR.png?raw=true" alt=""
                          style="display: inline; max-width: 100px; height: auto; width: 20%;" />
                      <p style="display: inline; font-size:25px">UNIQUE ID: 223431RETERTY6Y67U6778IWDWWRDGHY34</p>
                  </div>
              </div>
          </div>
  
      </div>
  </body>
  
  </html>
  `
}
