import React from "react";

const Review = () => {
  return (
    <div className="review">
      <h1>Customer Review</h1>
      <div className="showreview">
        <h2>No reviews yet</h2>
      </div>

      <div className="writereview">
        <h2>Write a review</h2>
        <form>
          <input required type="text" placeholder="username" />
          <input required type="email" placeholder="email" />
          <input required type="text" placeholder="review title" />
          <input className="note"
            required
            type="text"
            placeholder="Body of Review (max 500 words)"
          />
        </form>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Review;
