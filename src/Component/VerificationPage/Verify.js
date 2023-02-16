
import React, { useState } from 'react';
import { Tabs } from './Tabheader.js'
import './verification.css'

// const HeadingDisplay= ({heading}) =>{

//     return(
//         <h2 key={heading.id}>{heading.text}</h2>
//     )
// }


export const Verify = () => {
    const [ShowTabs, setShowTabs] = useState(Tabs[0]);
    // const [value, setValue] = useState(0);
    // setShowTabs(Tabs[value])


    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='verify-heading'>
                            <h3>Verify</h3>
                        </div>

                        <div class="line-container">
                            <div class="line-vertical"></div>
                            <div class="line-horizontal-container">
                                <div class="line-horizontal"></div>
                                <div class="line-horizontal"></div>
                                <div class="line-horizontal"></div>
                            </div>
                            <div className='heading-container'>
                                {
                                    Tabs.map((Tabbuttons) => {
                                        const { id, buttonText } = Tabbuttons
                                        return (
                                            <h7 key={id} onClick={() => {
                                                setShowTabs(Tabs[id])
                                            }} className={`${ShowTabs === Tabs[id] ? 'active-btn': ''}`} >
                                                 {buttonText}
                                            </h7>

                                        )
                                    })

                                }
                                <h7>Upload Document</h7>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-7'>
                        <div className='tab-header'>
                            <h2 key={ShowTabs.id} >{ShowTabs.text}</h2>
                        </div>
                        {ShowTabs.component}
                    </div>
                    <div className='col-1'>

                    </div>
                </div>
            </div>
        </div>
    )
}