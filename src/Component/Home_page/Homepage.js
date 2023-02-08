import React from 'react'
import './Homepage.css';
import Banner from './Banner.png'
import Body from './Body'




const Homepage = () => {
  return (
    <>
    <div className='Banner'>
      <img src={Banner} alt=""></img>
    </div>
    
      <Body></Body>
    
    </>
    
  )
}

export default Homepage