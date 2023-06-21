import React from 'react'
import nofakedegree from '../../images/NomorefakeDegrees.png'

const Edit = () => {
    return (
        <div className='row roww'>
            <div className='col-sm-8 content'>
                <h4>No More Fake Degrees</h4>
                <p>In order to guarantee the integrity of the degree and thus eliminate the possibility of 
                    fake degrees, our system uses the high-end 
                    cryptography offered by blockchain.</p>
            </div>
            <div className='col-sm-4'>
                <img src={nofakedegree} className='fakedgreeImage'></img>
            </div>

        </div>
    )
}

export default Edit