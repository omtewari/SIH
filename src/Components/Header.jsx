import React from 'react'
import Navbar from './Navbar'
function Header() {
  return (
    <div className='header'>
       <Navbar/>
       <div className='intro'>
        <p>Online Appointment Booking
           For Tele-Consultation
          Stay Home e-OPD</p>
        <h1>Online Registration System</h1>
        <p>iuy</p>
        <a href="#" className='header-btn'>Book Appointment</a>
        <a href="#" className='header-btn'>Book Consultation Appointment</a>
       </div>
    </div>
  )
}

export default Header