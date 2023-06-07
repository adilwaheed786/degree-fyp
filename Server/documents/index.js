const certificateDoc = () => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>PDF Certificate</title>
      <!-- Stylesheets, scripts, meta tags, etc. go here -->
    </head>
    <body>
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
        <h5>SUMAYYA KHALID</h5>
        <h5>BACHLORS OF SOFTWARE ENGINEERING  </h5>
        <p>CGPA:3.44</p>

        <p>WITH ALL THE RIGHTS AND PRIVILIGES THERES TO</p>


        <div className='sealdiv'>
          <p>ISSUE DATE: 9/2/2023</p>

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
    </body>
    </html>
    `
}


module.exports = {certificateDoc}