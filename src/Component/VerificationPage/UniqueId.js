import React from 'react'
import { useState } from 'react';
import Roboimage from '../../images/NotaRobot.png';


const UniqueId = () => {

    const [inputValue, setInputVlaue] = useState('');
    const [error, setError] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.length == 0) {
            setError(true);
        }
    }



    return (
        <div className='container midComponent'>
            <div className='row header'>
            <form onSubmit={handleSubmit}>

                <table className='table-Id' >
                    <tr>
                        <td>
                            <h5 className='id-label'>Unique Id</h5>
                        </td>
                        <td>
                            <input type='text' className='Id-input' value={inputValue} onChange={e => setInputVlaue(e.target.value)}></input>
                                {
                                error && inputValue.length<=0 ? <label className='errorMessage'>Unique Id Can't be empty</label> : ""
                                }
                         </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div className='notRobot'>
                                <input type='checkbox'></input>
                                <h6>I am Not a Robot</h6>
                                <div className='Rboot-image'>
                                    <img src={Roboimage}></img>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='submit-btn'>Submit</button>
                        </td>
                    </tr>

                </table>
            </form>
            </div>


        </div>
    )
}

export default UniqueId