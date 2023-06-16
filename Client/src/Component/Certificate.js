import React from 'react'
import certificate from '../images/certificate.png'
import s4 from '../images/s4.png'
import logo from '../images/logo.png'
import QR from '../images/QR.png'
import "../Css/certificate_design.css"
import { useState } from 'react'
import { useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios'
import saveAs from 'file-saver'



export const Certificate = () => {
  const location = useLocation();
  const formData = location.state;
  console.log(formData)
  
  const navigate = useNavigate()



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
  const [updatedData, setUpdatedData] = useState(formData);

  console.log('hey')
  console.log(firstname)
  // const lastname = queryParams.get('lastname');
  // const fathername = queryParams.get('fathername');
  // const enrollment = queryParams.get('enrollment');
  // const registration = queryParams.get('registration');
  // const program = queryParams.get('program');
  // const batch = queryParams.get('batch');
  // const dateofgraduation = queryParams.get('dateofgraduation');
  // const cgpa = queryParams.get('cgpa');
  const createAndDownloadpdf =  () =>{
    
    axios.post('/create-pdf',{ firstname,
     lastname,
     program,
     dateofgraduation,
     cgpa })
    .then(() => axios.get('/fetch-pdf', {responseType: 'blob'}))
    .then((res) =>{
      const pdfBlob = new Blob([res.data],{type:'application/pdf'});
      saveAs(pdfBlob,'newpdf.pdf')
      
      console.log('pdf ban gai hai aur download hau gai hai')

    })
    .catch((err) => {
      console.log(err);
    });
  }


  const handleUpdate = () => {
    
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


          <button type="button" class="btn btn-outline-primary" onClick={handleUpdate}>Update</button>
          <button type="button" class="btn btn-outline-primary"onClick={createAndDownloadpdf}>Upload</button>
        </div>
        {/* --------buttons code end */}


      </div>

      {/* -------Certificate div end */}

    </div>
  )
}
export default Certificate;
