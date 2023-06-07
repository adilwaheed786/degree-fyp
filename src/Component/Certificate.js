import React from 'react'
import certificate from '../images/certificate.png'
import s4 from '../images/s4.png'
import logo from '../images/logo.png'
import QR from '../images/QR.png'
import "../Css/certificate_design.css"
// import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
// import { PDFDownloadLink } from '@react-pdf/renderer';
import axios from 'axios'
import saveAs from 'file-saver'

export const Certificate = () => {
  
  const createAndDownloadpdf = async () =>{
   
    axios.post('/create-pdf')
    .then(() => axios.get('/fetch-pdf', {responseType: 'blob'}))
    .then((res) =>{
      const pdfBlob = new Blob([res.data],{type:'application/pdf'});
      saveAs(pdfBlob,'newpdf.pdf')
      console.log('yahan par method hai')

    })
    .catch((err) => {
      console.log(err);
    });
  }

  // const styles = StyleSheet.create({
  //   preview: {
  //     marginBottom: 20,
  //   },
  //   heading: {
  //     fontWeight: 'bold',
  //   },
  //   certificateContainer: {
  //     display: 'flex',
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //   },
  //   certimg: {
  //     width: '70%',
  //     maxHeight: 'auto',
  //     height: 'auto',
  //     border: '2px solid black',
  //   },
  //   certContent: {
  //     marginLeft: 20,
  //   },
  //   bahria: {
  //     marginTop: 10,
  //   },
  //   sealdiv: {
  //     marginTop: 10,
  //     display: 'flex',
  //     alignItems: 'center',
  //   },
  // });

  
  // const handleGeneratePDF = () => {
   
  //   const MyDocument = (
  //     <Document>
  //       <Page>
  //         <View style={styles.certificateContainer}>
  //           <Image src={certificate} style={styles.certImg} />

  //           <View style={styles.certContent}>
  //             <h4 style={{ marginTop: '10px' }}>BAHRIA UNIVERSITY</h4>

  //             <Image
  //               src={logo}
  //               style={{ maxWidth: '100px', height: '10%', maxHeight: '100px', width: '10%' }}
  //             />

  //             <p className="bahria">BAHRIA AND FACULTY OF UNIVERSITY HAVE GRANTED TO </p>
  //             <h5>SUMAYYA KHALID</h5>
  //             <h5>BACHLORS OF SOFTWARE ENGINEERING</h5>
  //             <p>CGPA:3.44</p>

  //             <p>WITH ALL THE RIGHTS AND PRIVILEGES THERES TO</p>

  //             <View style={styles.sealDiv}>
  //               <p>ISSUE DATE: 9/2/2023</p>

  //               <Image src={s4} style={{ maxWidth: '100px', height: 'auto', maxHeight: '100px', width: '10%' }} />

  //               <p>SIGNATURE:</p>
  //             </View>

  //             <View style={styles.sealDiv}>
  //               <Image src={QR} style={{ maxWidth: '100px', height: 'auto', maxHeight: '50px', width: '5%' }} />

  //               <p>UNIQUE ID:223431RETERTY6Y67U6778IWDWWRDGHY34</p>
  //             </View>
  //           </View>
  //         </View>
  //       </Page>
  //     </Document>
  //   );

  //   const blob = new Blob([MyDocument], { type: 'application/pdf' });
  //   const url = URL.createObjectURL(blob);
  //   window.open(url);
  // };

 

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
        </div>

        {/* --------buttons code start */}
        <div className="buttons">


          <button type="button" class="btn btn-outline-primary">Update</button>
          
          <button type="button" class="btn btn-outline-primary"  onClick={createAndDownloadpdf}>Upload</button>
        </div>
        {/* --------buttons code end */}
        <div>
      
    </div>

      </div>

      {/* -------Certificate div end */}

    </div>
  )
}
