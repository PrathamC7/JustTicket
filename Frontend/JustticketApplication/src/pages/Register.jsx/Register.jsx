import React, { useState } from "react";
import "./Register.css";
function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedDate, setSelectedDate] = useState("");


const onRegister = ()=>{
    if(firstName.length == 0){
        
    }
}

  return (
    <div className="container">
      <h2 className="page-header">Register</h2>
      <div className="register-container">
        <div className="mb-2">
          <label htmlFor="">First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="">Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="">Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={selectedDate}
            className="form-control"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div>
          Already have an account?
          {/* <Link to='/'>Login here</Link> */}
          <a href="">Login</a>
        </div>
        <div>
          <button
            onClick={onRegister}
            className="btn btn-success"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
