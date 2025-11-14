import React from 'react'

function Navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-primary   ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">JUST TICKET</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">All Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">My Reviews</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Shared With Me</a>
        </li>
       
         <li className="nav-item">
          <a className="nav-link" href="#">All Reviews</a>
        </li>
      </ul>
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="#">Edit profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Change Password</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Logout</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
