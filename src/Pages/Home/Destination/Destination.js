import React, { useEffect, useState } from "react";
import "./Tour.css";
import SingleTour from "./SingleTour/SingleTour";
const Tour = () => {
  const [Tours, setTours] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allTours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <div className="Tours">
      <div className="row Tour-container my-5">
        <p className="title">TOURS</p>
        <hr className="hr" />
        <p className="sub-title mt-2">
        Welcome to the best travel agency where you can find tons of tours to any place on Earth.
        </p>
        <div className="row g-4 Tour">
          {Tours.map((tour) => (
            <SingleTour
              tour={tour}
              key={tour._id}
            ></SingleTour>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tour;
