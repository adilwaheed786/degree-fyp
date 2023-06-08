import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import './studentcertificate.css';
//import { useHistory } from 'react-router-dom';


export const StudentCertificate = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [fathername, setFathername] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [registration, setRegistration] = useState('');
    const [program, setProgram] = useState('');
    const [batch, setBatch] = useState('');
    const [dateofgraduation, setDateofgraduation] = useState('');
    const [cgpa, setCgpa] = useState('');
    const [other, setOther] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const formData = location.state
    console.log(formData)

    const handleButtonClick = (e) => {
        e.preventDefault();
       
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


            // Navigate to the second page
            // navigate(`/confirm,firstname=${firstname}&lastname=${lastname}
            // &fathername=${fathername}
            // &enrollment=${enrollment}
            // &registration=${registration}
            // &program=${program}
            // &batch=${batch}
            // &cgpa=${cgpa}`);

            navigate('/confirm', { state: formData });

        }

    };

    useEffect(() => {
        debugger
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
                                <input type="text" className="form-control shadow" placeholder="FirstName" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="LastName" value={lastname} onChange={(event) => setLastname(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="FatherName" value={fathername} onChange={(event) => setFathername(event.target.value)} />
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Other Information" value={other} onChange={(event) => setOther(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Enrollment Number" value={enrollment} onChange={(event) => setEnrollment(event.target.value)} />
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Registration Number" value={registration} onChange={(event) => setRegistration(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Program" value={program} onChange={(event) => setProgram(event.target.value)} />
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Batch #" value={batch} onChange={(event) => setBatch(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Date Of Graduation" value={dateofgraduation} onChange={(event) => setDateofgraduation(event.target.value)} />
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="CGPA" value={cgpa} onChange={(event) => setCgpa(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className='col d-flex justify-content-center'>
                            <Link>
                                <button onClick={handleButtonClick} className={'button mt-20 mb-4 '} type="submit">Preview And Add</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}
export default StudentCertificate;

// onClick={e => (!firstname || !lastname||!fathername||!enrollment||!registration||!program||!batch||!dateofgraduation||!cgpa||!other) ? e.preventDefault() : null} to={"/confirm"}
