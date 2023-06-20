import React, { useState,useEffect } from 'react'
import { Link , useNavigate, useLocation} from "react-router-dom";
import './studentcertificate.css';

export const StudentCertificate = () => {
    const [firstname, setFirstname] = useState('');
    const [firstnameError, setFirstnameError] = useState('');
    const [lastname, setLastname] = useState('');
    const [lastnameError, setLastnameError] = useState('');

    const [fathername, setFathername] = useState('');
    const [fathernameError, setFathernameError] = useState('');

    const [other, setOther] = useState('');
    const [otherError, setotherError] = useState('');

    const [enrollment, setEnrollment] = useState('');
    const [enrollmentError, setEnrollmentError] = useState('');

    const [registration, setRegistration] = useState('');
    const [registrationError, setRegistrationError] = useState('');

    const [program, setProgram] = useState('');
    const [programError, setProgramError] = useState('');

    const [batch, setBatch] = useState('');
    const [batchError, setBatchError] = useState('');

    const [dateofgraduation, setDateofgraduation] = useState('');
    const [dateofgraduationError, setDateofgraduationError] = useState('');

    const [cgpa, setCgpa] = useState('');
    const [cgpaError, setCgpaError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const formData = location.state
    console.log(formData)

    const handleButtonClick = (e) => {
        e.preventDefault();

        
    };
    
    useEffect(() => {
        
        if (formData != undefined) {
            setFirstname(formData.firstname);
            setLastname(formData.lastname);
            setFathername(formData.fathername);
            setDateofgraduation(formData.dateofgraduation);
            setCgpa(formData.cgpa)
            setBatch(formData.batch)
            setRegistration(formData.registration)
            setEnrollment(formData.enrollment)
            setOther(formData.other)
            setProgram(formData.program)
        }
    }, [formData])
    const handlepreview = (e) => {
        e.preventDefault();


        // if (firstname.trim() === '') {
        //   setFirstnameError("*This Field Is Required");

        // } 
        // else
        // {
        // handleFirstnameChange(firstname);
        // }


        if (lastname.trim() === '') {
            setLastnameError("*This Field Is Required");

        } else {
            handleLastNameChange(lastname)
        }

        if (fathername.trim() === '') {
            setFathernameError("*This Field Is Required");

        } else {
            handlefatherNameChange(fathername)
        }
        if (other.trim() === '') {
            setotherError("*This Field Is Required");

        } else {
            handleOtherChange(other)
        }
        if (enrollment.trim() === '') {
            setEnrollmentError("*This Field Is Required");

        } else {
            handleEnrollnment(enrollment)
        }

        if (registration.trim() === '') {
            setRegistrationError("*This Field Is Required");

        } else {
            handleRegistrationChange(registration)
        }
        if (program.trim() === '') {
            setProgramError("*This Field Is Required");

        } else {
            handleProgramChange(program)
        }
        if (batch.trim() === '') {
            setBatchError("*This Field Is Required");

        } else {
            handleBatchChange(batch)
        }

        if (dateofgraduation.trim() === '') {
            setDateofgraduationError("*This Field Is Required");

        } else {
            handleDateChange(dateofgraduation)
        }
        if (cgpa.trim() === '') {
            setCgpaError("*This Field Is Required");

        } else {
            validateCgpa(cgpa)
        }
        
        if (handleFirstnameChange(firstname) && handleLastNameChange(lastname) && handlefatherNameChange(fathername) && handleOtherChange(other)
            && handleEnrollnment(enrollment) && handleRegistrationChange(registration) && handleProgramChange(program) && handleBatchChange(batch)
            && handleDateChange(dateofgraduation) && validateCgpa(cgpa) ) {

                if (firstname && lastname && fathername && enrollment && registration && program && batch && dateofgraduation && cgpa) {
                    const formData =
                    {
                        firstname,
                        lastname,
                        fathername,
                        enrollment,
                        registration,
                        program,
                        batch,
                        dateofgraduation,
                        cgpa,
                        other,
                    }
        
                    navigate('/confirm', { state: formData });
        
                }
        

        }

    
    };
    const handleFirstnameChange = (firstname) => {

        if (!firstname) {

            setFirstnameError('*This Field is required');
        } else {
            const regs = /^[a-zA-Z\s]+$/;
            if (!regs.test(firstname)) {
                setFirstnameError('First name should contain only letters');
            }
            return regs.test(firstname);

        }
    }
    const handleFirstNameFocus = () => {
        setFirstnameError("");
    }
    const handleLastNameFocus = () => {
        setLastnameError("");
    }
    const handleLastNameChange = (lastname) => {

        if (!lastname) {

            setLastnameError('*This Field Is Required');
        } else {
            const regs = /^[a-zA-Z\s]+$/;
            if (!regs.test(lastname)) {
                setLastnameError('Last name should contain only letters');
            }
            return regs.test(lastname);

        }
    }
    const handlefatherNameFocus = () => {
        setFathernameError("");
    }
    const handlefatherNameChange = (fathername) => {

        if (!fathername) {

            setFathernameError('Father name is required');
        } else {
            const regs = /^[a-zA-Z\s]+$/;
            if (!regs.test(fathername)) {
                setFathernameError('Father name should contain only letters');
            }
            return regs.test(fathername);

        }
    }
    const handleOtherinfoFocus = () => {
        setotherError("");
    }
    const handleOtherChange = (other) => {


        if (!other) {

            setotherError('Location of campus is required');
        } else {
            
            return true;

        }
    }
    const handleenrollnmentFocus = () => {
        setEnrollmentError("");
    }
    const handleEnrollnment = (enrollment) => { // function takes enrollment number as argument


        if (!enrollment) { // checks if enrollment number is empty or not
            setEnrollmentError("Enrollment number is required"); // returns error message if it is empty
        }
        else {
            const regex = /^[0-9]{2}-[0-9]{6}-[0-9]{3}$/;// regular expression to match the format
            if (!regex.test(enrollment)) { // checks if the enrollment number matches the format or not
                setEnrollmentError(" Please enter a valid enrollment number"); // returns error message if it doesn't match the format
            }


            return regex.test(enrollment); // returns true if the enrollment number is valid
        }
    };
    const handleregFocus = () => {
        setRegistrationError("");
    }
    const handleRegistrationChange = (registration) => {

        if (!registration) {
            setRegistrationError('Registration number is required');
        } else if (!registration.match(/^[0-9]+$/)) {
            setRegistrationError('Registration number should contain only numbers');
        } else if (registration.length !== 5) {
            setRegistrationError('Registration number should have 5 digits');
        } else {
            setRegistrationError("");
           return true;
        }
    }
    const handleprogramFocus = () => {
        setProgramError("");
    }
    const handleProgramChange = (programname) => {

        if (!programname) {

            setProgramError('Program name is required');
        } else {
           return true;



        }
    }
    const handlebatchFocus = () => {
        setBatchError("");
    }
    const handleBatchChange = (batch) => {


        if (!batch) {
            setBatchError('Batch number is required');
        } else if (!batch.match(/^\d{4}$/)) {
            setBatchError('Batch number should be a 4-digit number');
        } else {
            setBatchError('');
            return true;
        }
    }
    const handlecgpaFocus = () => {
        setCgpaError("");
    }
    const validateCgpa = (cgpa) => {
        const regex = /^[1-3](\.\d{1,2})?$|^4(\.0{1,2})?$/;
        if (!cgpa) {

            setCgpaError('CGPA is required');
        } else if (!regex.test(cgpa)) {
            setCgpaError('CGPA must be between 1 and 4 with up to 2 decimal places');
        } else {
            setCgpaError('');
            return true;
        }
    }
    const handledateFocus = () => {
        setDateofgraduationError("");
    }
    const handleDateChange = (dateofgraduation) => {
        const selectedDate = new Date(dateofgraduation);
        const currentDate = new Date();

        if (selectedDate > currentDate) {
            setDateofgraduationError('Date of graduation cannot be in the future');
        } else if (dateofgraduation === '') {
            setDateofgraduationError('Please select a date of graduation');
        } else {
            setDateofgraduationError('');
            return true;
        }
    };

    return (
        <>
            <div>
                <b>
                    <h1 className="heading">Student Certificate Details</h1>
                </b>
            </div>
            <div className='container'>
                <form>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                {/* <input type="text"  onChange={(event) => setFirstname(event.target.value)} /> */}



                                <input type="text" placeholder="FirstName" id="firstname" className={"form-control shadow"}value={firstname}  onChange={(event) => setFirstname(event.target.value)} onFocus={handleFirstNameFocus}
                                />
                                {firstnameError && <span style={{ color: 'red' }}>{firstnameError}</span>}
                            </div>

                            <div className="form-group col-md-4 m-2">
                                <input  type="text" className="form-control shadow" id="lastname" placeholder="LastName"  value={lastname} onChange={(event) => setLastname(event.target.value)} onFocus={handleLastNameFocus} />
                                {lastnameError && <span style={{ color: 'red' }}>{lastnameError}</span>}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow"  placeholder="FatherName" value={fathername}  onChange={(event) => setFathername(event.target.value)} onFocus={handlefatherNameFocus} />
                                {fathernameError && <span style={{ color: 'red' }}>{fathernameError}</span>}
                            </div>
                            <div className="form-group col-md-4 m-2">
  <select className="form-control shadow" value={other}onChange={(event) => setOther(event.target.value)} onFocus={handleOtherinfoFocus}>
    <option value="">Select Campus</option>
    <option value="Karachi">Karachi</option>
    <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
    {/* Add more options as needed */}
  </select>
  {otherError && <span style={{ color: 'red' }}>{otherError}</span>}
</div>

                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control  shadow" placeholder="Enrollment Number" value={enrollment} onChange={(event) => setEnrollment(event.target.value)} onFocus={handleenrollnmentFocus} />
                                {enrollmentError && <span style={{ color: 'red' }}>{enrollmentError}</span>}
                            </div>
                            <div className="form-group col-md-4 m-2">

                                <input type="text" value={registration} placeholder="Registration no" className="form-control  shadow"  onChange={(event) => setRegistration(event.target.value)} onFocus={handleregFocus} />
                                {registrationError && <span style={{ color: 'red' }}>{registrationError}</span>}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                          
                        <div className="form-group col-md-4 m-2">
  <select className="form-control shadow"value={program} onChange={(event) => setProgram(event.target.value)} onFocus={handleprogramFocus} >
    <option value="" >Select Program</option>
    <option value="Bachelors of Software Engineering">Bachelors of Software Engineering</option>
    <option value="Bachelors of Electrical Engineering">Bachelors of Electrical Engineering</option>
    <option value="Bachelors of Mechanical Engineering">Bachelors of Mechanical Engineering</option>
    <option value="Bachelors of Computer Engineering">Bachelors of Computer Engineering</option>
    {/* Add more programs as needed */}
  </select>
  {programError && <span style={{ color: 'red' }}>{programError}</span>}
</div>

                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Batch #" value={batch} onChange={(event) => setBatch(event.target.value)} onFocus={handlebatchFocus} />
                                {batchError && <span style={{ color: 'red' }}>{batchError}</span>}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="date" className="form-control shadow" placeholder="Date Of Graduation" value={dateofgraduation} onChange={(event) => setDateofgraduation(event.target.value)} onFocus={handledateFocus} />
                                {dateofgraduationError && <span style={{ color: 'red' }}>{dateofgraduationError}</span>}
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className={"form-control shadow"} placeholder="CGPA" value={cgpa}  onChange={(event) => setCgpa(event.target.value)} onFocus={handlecgpaFocus} />
                                {cgpaError && <span style={{ color: 'red' }}>{cgpaError}</span>}
                            </div>

                        </div>

                    </div>
                    {/* <div className="row ">
                        <div className='col justify-content-center'>
                               <button className={'button mt-20 mb-4 '} type="submit" onClick={handlepreview}>Preview And Add</button>
                            
                        </div>
                    </div> */}
                     <div className="row ">
                        <div className='col d-flex justify-content-center'>
                            <Link  to={"../certificate_details"}>
                                <button className={'button mt-20 mb-4 '} type="submit" onClick={handlepreview}>Preview And Add</button>
                            </Link>
                                                       
                        </div>
                    </div>
                  
                </form>
            </div>
        </>
    )
}
