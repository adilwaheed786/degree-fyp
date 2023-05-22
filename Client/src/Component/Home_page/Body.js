import React from 'react'
import pic1 from '../../images/Jhaal1.png';
import pic2 from '../../images/Jhaal2.png';
import arrow from '../../images/Arrow.png';
import { useCallback, useState,useRef } from 'react';
import { useDropzone } from 'react-dropzone';

const Body = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const inputRef = useRef(null);

    const handleDrop = useCallback((acceptedFiles) => {
        setPdfFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept: 'application/pdf',
        multiple: false,
    });

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the PDF file here, such as upload it to a server
    };
    return (
        <div className='row body-row'>
            <div className='col-md-2 column1'>
                <img src={pic1} alt="IMG"></img>
            </div>
            <div className='col-md-4 column2'>

                <div className='small_banner'>
                    <h4>Verify it with various other Techniques</h4>
                    <button className='getStarted_btn'>
                        Get Started
                        <div className='arrow-image'>
                            <img src={arrow} alt="IMG"></img>
                        </div>
                    </button>
                </div>

            </div>
            <div className='col-md-4 column3'>
                <div className='upload'>
                    <h2>Upload Document</h2>
                    <form onSubmit={handleSubmit}>
                        <div {...getRootProps()} onClick={handleClick}>
                            <input {...getInputProps()} ref={inputRef} style={{ display: 'none' }} />
                            {isDragActive ? (
                                <p>Drop the PDF file here ...</p>
                            ) : (
                                <p>
                                    {pdfFile ? `Selected file: ${pdfFile.name}` : 'Drag and drop a PDF file here, or click to select a file'}
                                </p>
                            )}
                        </div>
                        <div className='upload_btn'>
                            <button type="submit" className={pdfFile ? 'upload-btn-after' : 'upload-btn'} disabled={!pdfFile}>
                                Upload Degree File
                            </button>
                        </div>
                    </form>
                   
                </div>
            </div>
            <div className='col-md-2 column4'>
                <img src={pic2} alt="IMG"></img>
            </div>

        </div>

    )
}

export default Body