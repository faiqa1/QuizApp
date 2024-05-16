import React from 'react'
import logo from '../Images/logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
           <div className='footer-log-container'>
            <img src={logo} alt=''/>
           </div>
           <div className='footer-icons'>
            <FaYoutube/> 
            <FaTwitter/>
            <FaLinkedin/>
            <FaFacebook/>
           </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Careers</span>
                <span>Help</span>
                <span>FAQs</span>
                <span>About Us</span>
            </div>
            <div className='footer-section-columns'>
                <span>quizCareers.com</span>
                <span>askus@yahoo.com</span>
                <span>quizhelp@gmail.com</span>
                <span>about23@gmail.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms and Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
      
    </div>
  )
}
