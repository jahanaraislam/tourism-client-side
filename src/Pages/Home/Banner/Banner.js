import React from 'react';
import './Banner.css'
const Banner = () => {
  return (
    <div className="row container mx-auto banner-container">
      <div className="col-lg-3 col-md-4 col-1"></div>

      <div className="col-lg-6 col-md-12 col-12  banner-left mt-5 mb-3">
        <p className="mt-5">
          <span className="sub-title">
            Start your journey now!
          </span>
        </p>
        <h1 className="title mt-3 mb-4">Choose a
          Destination!</h1>
        <h5 className=" bottom-text mt-4 fw-medium">No tricks, just lots of treats!</h5>

      </div>
      <div className="col-lg-3 col-md-4 col-1"></div>
    </div>
  );
};

export default Banner;