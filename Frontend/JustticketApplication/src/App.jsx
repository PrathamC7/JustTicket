import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Login from './pages/Login/Login'
import Register from './pages/Register.jsx/Register'
import { Navigate, Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    {/* <Navbar/> */}
    {/* <Login/> */}
    {/* <Register/> */}

  <Routes>
    <Route path='/' 
    element={<Navigate to='/login'/>}
    />
    <Route path='login' 
    element={<Login/>}
    />
    <Route path='register' 
    element={<Register/>}
    />

    </Routes>     
    </>
  )
}

export default App
