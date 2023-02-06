import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './studentcertificate.css';

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
                                <input type="text" className="form-control shadow" placeholder="FirstName" onChange={(event) => setFirstname(event.target.value)} />
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="LastName" onChange={(event) => setLastname(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="FatherName" onChange={(event) => setFathername(event.target.value)} />
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Other Information" onChange={(event) => setOther(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Enrollment Number" onChange={(event) => setEnrollment(event.target.value)} />
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Registration Number" onChange={(event) => setRegistration(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Program" onChange={(event) => setProgram(event.target.value)} />
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Batch #" onChange={(event) => setBatch(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className='d-flex justify-content-center'>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="Date Of Graduation" onChange={(event) => setDateofgraduation(event.target.value)} />
                            </div>
                            <div className="form-group col-md-4 m-2">
                                <input type="text" className="form-control shadow" placeholder="CGPA" onChange={(event) => setCgpa(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className='col d-flex justify-content-center'>
                            <Link onClick={e => (!firstname || !lastname||!fathername||!enrollment||!registration||!program||!batch||!dateofgraduation||!cgpa||!other) ? e.preventDefault() : null} to={"/confirm"}>
                                <button className={'button mt-20 mb-4 '} type="submit">Preview And Add</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
