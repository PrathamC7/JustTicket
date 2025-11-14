import React from 'react'

function CreateReview() {
  return (
    <div className='container'>
        <h2 className='page-header'>Create Review for Titanic</h2>
        <div className="mb-2">
            <label htmlFor="">Rating (1-10)</label>
            <input type="number" className='form-control' />
        </div>
        <div className="mb-3 d-flex flex-column" >
            <label htmlFor="textBox">Your Review</label>
            <textarea name="" id="textBox border  rounded" rows={5} ></textarea>
        </div>
    </div>
  )
}

export default CreateReview
