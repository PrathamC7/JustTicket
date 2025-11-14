import React from "react";

function DeleteReview() {
  return (
    <div className="container">
        <h2 className="page-header">Delete Review</h2>
      <div class="card" style={{"width": "80rem"}}>
        <div class="card-body ">
        
          <h6 class="card-subtitle mb-2 text-body-secondary">Review for : Titanic <span>9/10</span></h6>
          <p class="card-text">
            An emotionally charged masterpiece.Beautiful cinam...
          </p>
          <div className="bg-light border rounded p-2 text-body-secondary mb-1">
            <p>
                Are You Sure You Want to delete this review?
            </p>
            <p>This action cannot be undone.Any shares of this review will be removed.</p>
          </div>
          <div className="d-flex justify-content">
          <button className="btn btn-warning me-3 ">Cancel</button>
          <button className="btn btn-success">Confirm Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteReview;
