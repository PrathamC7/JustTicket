import React from 'react'

function EditProfile() {
  const 
  return (
     <div className="container">
      <h2 className="page-header">Edit Profile</h2>
      <div className="edit-container">
        <div className="mb-2">
          <label htmlFor="">First Name</label>
          <input
                        type="text"
            
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Date</label>
          <input
            type="date"
            // value={selectedDate}
            className="form-control"
          />
        </div>

       
        <div>
          <button
            // onClick={onEdit}
            className="btn btn-success"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
