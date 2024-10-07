// import React from 'react';
import React, { useState } from 'react';
import logo from "../images/logo1.png";
import SearchComponent from './SearchComponent';
import './SearchComponent.css';
function Navbar() {
  return (
    <nav>
        <a href="#" className='logo'>
            <img src={logo} alt="logo"/>
        </a>
        <h1>Online Registration</h1>
        <input className='menu-btn' type="checkbox" id="menu-btn"/>
        <label className='menu-icon' for menu-btn>
            <span className="nav-icon"></span>
        </label>
        <ul className='menu'>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Health ID</a></li>

            {/* <li><a href="#">Create ABHA(Health ID)</a></li> */}
            <SearchComponent />
            {/* <div className='search-box'>
            
            <input 
                type="text" 
                value={query} 
                onChange={handleInputChange} 
                placeholder="Search..." 
            />
            <button onClick={handleSearch}>Search</button>
        </div> */}
       
        {/* <img src={theme === "light" ? search_icon_light : search_icon_dark} alt="Search Icon"/> */}
      
            <li><a href="/login">Register/Login</a></li>



        </ul>
    </nav>
  )
}

export default Navbar