
import SignUp from './SignUp'
import Login from './Login';
import SignUpHospital from './SignUpHospital';
import LoginHospital from './LoginHospital';


import {  Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css'

function App() {
 

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup-hospital' element={<SignUpHospital/>}></Route>
    <Route path='/login-hospital' element={<LoginHospital/>}></Route>

  </Routes>
  </BrowserRouter>
  </>
  
   
  )
}

export default App
