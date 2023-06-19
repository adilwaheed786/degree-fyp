const QRCode = require('qrcode');
async function generateQRCode(value) {
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(value);
      return qrCodeDataUrl;
    } catch (error) {
      console.error('Error generating QR code:', error);
      return null;
    }
  }
  
module.exports =async  (firstname, lastname, program, cgpa, dateofgraduation,uniqueId) =>{
    const qrCodeData = await generateQRCode(uniqueId);
    //const qrCodeDataUrl = `data:image/png;base64,${qrCodeData}`;
   // console.log("new" + qrCodeData);
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
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATcSURBVO3BQY4bSRAEwfAC//9l3znmqYBGJ2clIczwR6qWnFQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYs+eQnIb1JzA2RScwNkUnMD5EbNBOQJNROQ36TmjZOqRSdVi06qFn2yTM0mIE+oeULNE2qeUHMD5Ak1m4BsOqladFK16KRq0SdfBuQJNU8AmdRMQG7U3ACZ1ExAJjVPqHkDyBNqvumkatFJ1aKTqkWf/GOA3Kh5Qs2NmgnIG2r+ZidVi06qFp1ULfrkH6dmArJJzRtq/iUnVYtOqhadVC365MvU/J+A3KiZgLyh5gkgk5on1PxJTqoWnVQtOqla9MkyIP8nNROQSc0EZFIzAZnUTEAmNROQSc0bQP5kJ1WLTqoWnVQt+uQlNX8yNROQGyCTmjfUTEAmNTdq/iYnVYtOqhadVC3CH3kByKRmArJJzQ2QSc0NkEnNBGRSMwF5Qs0EZFIzAdmk5ptOqhadVC06qVqEP/KLgExqJiCTmgnIN6m5ATKpeQLIpOYGyKRmAnKj5gbIpOaNk6pFJ1WLTqoWffISkEnNE0BugDyh5gbIJiBPqJmA3KiZgDwB5EbNppOqRSdVi06qFn3yh1HzBpBJzY2aGyBPqHlCzQRkAjKpuQEyqflNJ1WLTqoWnVQtwh/5RUC+Sc0EZFIzAZnU3AB5Q80NkEnNBGRScwPkRs2mk6pFJ1WLTqoW4Y+8AGRSMwGZ1LwB5A01E5BNam6AvKFmAjKpuQFyo+aNk6pFJ1WLTqoW4Y/8IiCTmgnIjZobIJOaCcikZgJyo2YCcqPmBsikZgKySc03nVQtOqladFK16JOXgExqNqmZgPwmNU+o2aRmAnKj5gbIjZo3TqoWnVQtOqlahD+yCMikZgLyhppNQCY1E5BvUjMBmdRMQCY1E5AbNd90UrXopGrRSdWiT14CMqmZgExqJiA3ap4AMql5Q80EZFLzBJAbNROQSc0EZFLzBJBJzRsnVYtOqhadVC365MvU3KiZgExA3gDyfwIyqZmATGomNROQSc0NkBs1m06qFp1ULTqpWvTJlwG5UTOpuQEyqbkB8gaQ3wRkUjOpmYDcqJmAfNNJ1aKTqkUnVYs++TI1N0AmNROQSc0E5JvUTEAmIN8E5Ak1E5BJzTedVC06qVp0UrUIf+QvBmRScwNkUjMBeULNG0AmNU8AuVEzAblR88ZJ1aKTqkUnVYs+eQnIb1IzqbkB8puATGomIE8AmdTcqLlR800nVYtOqhadVC36ZJmaTUBugNyouQFyo2YCMgGZ1ExA3lDzTUAmNW+cVC06qVp0UrXoky8D8oSaTUCeUDMBuVEzAZnU3ACZgLwB5EbNN51ULTqpWnRSteiTf5yaGyATkEnNDZBJzQTkRs0EZFIzAZnUvKFm00nVopOqRSdViz75x6i5ATKpeQLIpGYC8oaaCcikZgLyhppNJ1WLTqoWnVQt+uTL1HyTmhsgN0AmNW+oeQLIpGZSMwG5UXMD5JtOqhadVC06qVr0yTIgvwnIE2pugExqJjUTkDfUTEAmNTdqboBMar7ppGrRSdWik6pF+CNVS06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWik6pF/wEKZ1MW9eabzwAAAABJRU5ErkJggg==" alt=""
                  style="display: inline; max-width: 100px; height: auto; width: 20%;" />
                      
                      <p style="font-size:25px">UNIQUE ID: ${uniqueId}</p>
                  </div>
              </div>
          </div>
       </div>
  </body>

  </html>

  `
}
