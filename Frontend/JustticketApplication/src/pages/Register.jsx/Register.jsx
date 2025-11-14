import React, { useState } from "react";
import "./Register.css";
import { toast } from "react-toastify";
import { register } from "../../services/users";
import { useNavigate,Link } from "react-router-dom";
function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
    const navigate = useNavigate();

const onRegister = async ()=>{
    if (firstName.length == 0) {
      toast.warning('please enter first name')
    } else if (lastName.length == 0) {
      toast.warning('please enter last name')
    } else if (email.length == 0) {
      toast.warning('please enter email')
    } else if (phone.length == 0) {
      toast.warning('please enter phone number')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warning('please confirm password')
    } else if (password != confirmPassword) {
      toast.warning('password does not match')
    }else if(selectedDate.length == 0){
        toast.warning('please enter date')
    }else{
        const response = await register(
        firstName,
        lastName,
        email,
        password,
        phone
      )

      if (response['status'] === 'success') {
        toast.success('Successfully registered user')

        // go to the Login page
        navigate('/')
      } else {
        toast.error(response['error'])
      }
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
          <Link to='/'>Login here</Link>
          
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
