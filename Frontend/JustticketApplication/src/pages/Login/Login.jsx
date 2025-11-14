import React from 'react'
import "./Login.css"
import { useState } from 'react'
function Login() {
     const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='container'>
        <h2 className='page-header'>Login</h2>
        <div className='login-container border border-dark rounded p-3'>
            <div className="mb-3">
                <label htmlFor=""  onChange={(e) => {
              setEmail(e.target.value)
            }}>Email</label>
                <input type='email' className='form-control' ></input>
            </div>
             <div className="mb-3">
                <label htmlFor=""  onChange={(e) => {
              setPassword(e.target.value)
            }}>Password</label>
                <input type='password' className='form-control'></input>
            </div>
             <div className="mb-1">
                
                <input type='checkbox'  ></input>
                <label htmlFor="">Remember me</label>
            </div>
            <div className='mb-1'>
                Don't have an account yet? <a href="">Register here</a>
            </div>
             <div className='mb-1'>
              <button className='btn btn-primary'>Login</button>
            </div>

        </div>
        
    </div>
  )
}

export default Login
