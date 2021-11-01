import React from "react";
import { Link } from "react-router-dom";
import Menubar from "../Header/Menubar/Menubar";
// not found area
const Error = () => {
  return (
   <div>
     <Menubar/>
      <div className="m-5 p-5">
      <h1 className="display-1 fw-bold my-5 pt-5 text-danger text-center">
        404
      </h1>
      <h1 className="text-center display-4 mb-5">Page Not Found</h1>
      <Link to="/home"><button className="book-now-btn w-25 text-center">Go Back</button></Link>
    </div>
   </div>
  );
};

export default Error;
