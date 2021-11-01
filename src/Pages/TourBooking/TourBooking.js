import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import Rating from "react-rating";

import Menubar from "../Header/Menubar/Menubar";

import "./TourBooking.css";
import useAuth from "../hooks/useAuth";
const TourBooking = () => {
  const { user } = useAuth();
  const { tourId } = useParams();
  const [tours,setTours] = useState({});
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    fetch(`http://localhost:5000/addBooking`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
            alert(
                
                'Your Booking has been added!',
               
              )
        } else {
          alert("Try again");
        }
      });
      
    reset()
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleTour/${tourId}`)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, [tourId]);
  const {
    countryName,
    img,
    des,
   
    regularPrice,
    rating,
   
    
  } = tours;
  return (
    <div>
      <Menubar />
      <div className="booking-container">
        <div className="row top-part text-center ">
          <p className="fs-1 fw-bold mt-5">
            Welcome to Your Next Adventure Destination In {countryName}
          </p>

          <hr className="hr text-center" />
        </div>
        <div className="row booking my-5 mx-auto">
           
          <div className="col-lg-7 col-md-12 col-12 d-flex booking-left border">
            <div className="row  left-container py-3 ">
              <div className="col-lg-6 col-md-6 col-12 p-2">
                <img src={img} className="img-fluid  mt-4 " alt="" />
              </div>
              <div className="col-lg-6 col-md-6 col-12 ">
                <div className="discount fw-bold ps-2  text-center my-3 py-2">
                </div>
                <h5 className="card-title mb-3 fw-bold">{countryName}</h5>

                <div className="rating d-flex">
            
            <Rating
              initialRating={rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            ></Rating>
           
          </div>
                <p>{regularPrice}</p>

                <p className="card-text">{des}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12 booking-right">
         
            <div className="order-box p-4 border d-flex justify-content-center align-items-center">
              <div className="booking-form  ">
              <p className="fs-3 ps-3 fw-bold my-4">Book Your Destinations</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                 

                  <input
                    type="text"
                    className="p-2 m-2"
                    defaultValue={user.displayName}
                    {...register("userName", { required: true })}
                  />
                  <br />
                  <input
                    type="email"
                    className="p-2 m-2"
                    defaultValue={user.email}
                    {...register("userEmail", { required: true })}
                  />
                  <br />
                  <input
                    type="text"
                    className="p-2 m-2"
                    defaultValue={countryName}
                    {...register("countryName", { required: true })}
                  />
                  <br />

                  <input
                    type="text"
                    className="p-2 m-2"
                    defaultValue={regularPrice}
                    {...register("regularPrice", { required: true })}
                  />
                  <br />
                  <input
                    className="p-2 m-2"
                    placeholder="Address"
                    {...register("address", { required: true })}
                  />
                  <br />
                  <input
                    className="p-2 m-2"
                    placeholder="City"
                    {...register("city", { required: true })}
                  />
                  <br />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <input className="w-50 mx-auto px-3 py3 bg-secondary fw-bold fs-5  text-white btn " type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TourBooking;
