// import logo from './logo.svg';

import React from 'react';
import Header from './Components/Header';
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Howitwork from './Components/Howitwork';
import About from './Components/About';
import Agent from './Components/Agent';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App"> 
    <Header/>
    <Howitwork/>
    <About/>
    <Agent/>
    <Contact/>
{/*     
    <Header/>
      {/* <Main/> */}
     
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
