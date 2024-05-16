import React from 'react'
import Navbar from '../Navbar/Navbar'
import banner from '../Images/banner.jpg'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div className='container'>
        <Navbar/>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
           <img src={banner}/>
          </div>
        </div>      
    </div>
  )
}
