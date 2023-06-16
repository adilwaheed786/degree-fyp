
module.exports = (firstname, lastname, program, cgpa, dateofgraduation) =>{
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>PDF Certificate</title>
      <style>
        .certificate {
          display: flex;
          align-items: center;
        }

        .certimg {
          width: 70%;
          max-height: auto;
          height: auto;
          border: 2px solid black;
        }

        .Certcontent {
          margin-left: 20px;
        }

        .bahria {
          margin-top: 10px;
        }

        .sealdiv {
          margin-top: 10px;
          display: flex;
          align-items: center;
        }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="certimg">
          <img src="certificate.png" alt="" class="certimg" style="width: 70%; max-height: auto; height: auto; border: 2px solid black;" />

          <div class="Certcontent">
            <h4 style="margin-top: 10px;">BAHRIA UNIVERSITY</h4>
            <img src="logo.png" alt="" style="max-width: 100px; height: 10%; max-height: 100px; width: 10%;" />
            <p class="bahria">BAHRIA AND FACULTY OF UNIVERSITY HAVE GRANTED TO</p>
            <h5 style="text-transform: capitalize;">${firstname} ${lastname}</h5>
            <h5 style="text-transform: uppercase;">${program}</h5>
            <p>CGPA: ${cgpa}</p>

            <p>WITH ALL THE RIGHTS AND PRIVILEGES THERETO</p>

            <div class="sealdiv">
              <p>Date Of Graduation: ${dateofgraduation}</p>
              <img src="s4.png" alt="" style="max-width: 100px; height: auto; max-height: 100px; width: 10%;" />
              <p>SIGNATURE:</p>
            </div>

            <div class="sealdiv">
              <img src="QR.png" alt="" style="max-width: 100px; height: auto; max-height: 50px; width: 5%;" />
              <p>UNIQUE ID: 223431RETERTY6Y67U6778IWDWWRDGHY34</p>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}


