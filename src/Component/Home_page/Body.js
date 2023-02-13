import React from 'react'
import pic1 from '../../images/Jhaal1.png';
import pic2 from '../../images/Jhaal2.png';
import arrow from '../../images/Arrow.png';

const Body = () => {
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
                    <div className='upload_btn'>
                    <button>Upload Degree file</button>
                    </div>
                </div>
            </div>
            <div className='col-md-2 column4'>
                <img src={pic2} alt="IMG"></img>
            </div>

        </div>

    )
}

export default Body