import React from 'react'
import './Homepage.css';
//import Banner from '../../images/Banner.png'
import Body from './Body'
import Banner from './Banner';
import Edit from './Edit';



const Homepage = () => {
  return (
    <>
    <div className='Bannerr'>
    <Banner></Banner>
    </div>
     <Edit></Edit>
    
      <Body></Body>
    
    </>
    
  )
}

export default Homepage