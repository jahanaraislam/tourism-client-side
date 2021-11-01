import React from "react";
import "./SingleTour.css";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const SingleTour = (props) => {
  const {
    img,
    _id,
    countryName,
    des,
    rating,
    regularPrice,
    
  } = props.tour;

  return (
    <div className="col-lg-3 col-md-6 col-12 my-4">
      <div className=" singleDes">
        <div className="card  ">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title mb-3 fw-bold">{countryName}</h5>
            <p className="card-text">{des.slice(0, 60)}</p>
            <div className="rating d-flex">
            
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              ></Rating>
             
            </div>
            <div>
             
                <h5>{regularPrice} </h5>
                
             
            </div>
            
          </div>
          <Link to={`/Tour/${_id}`}>
            <button className="book-now-btn">BOOK NOW </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
