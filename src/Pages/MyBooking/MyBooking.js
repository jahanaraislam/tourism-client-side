import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import useAuth from "../hooks/useAuth";
import Menubar from "../Header/Menubar/Menubar";
import "./MyBooking.css";
const MyBooking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/myBookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user.email, control]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, u want to delete it?");
    if (proceed) {
      fetch(`http://localhost:5000/deleteBooking/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setControl(true);
            alert("Deleted successfully");
          } 
        });
    }
  };

  return (
    <div>
      <Menubar></Menubar>

      <div className="my-booking">
        <div className="text-center my-4 fw-bold fs-2">
          Your Booking : {bookings.length} Destinations
        </div>
        <div className="row container mx-auto text-center my-5">
          {bookings?.map((pd, index) => (
            <div className="col-12 ">
              <Table className="w-75  mx-auto" striped bordered hover>
                <thead className="fw-bold fs-5">
                  <tr>
                    <th>#</th>
                    <th>Destination</th>

                    <th>status</th>
                    <th>City</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody className="fw-bold">
                  <tr>
                    <td>{index}</td>
                    <td>{pd.countryName}</td>
                    <td>{pd.status}</td>
                    <td>{pd?.city}</td>
                    <td>{pd.address}</td>
                    <button
                      onClick={() => handleDelete(pd?._id)}
                      className="btn my-1 fw-bold fs-6 w-75 mx-auto bg-danger px-4"
                    >
                      Delete
                    </button>
                  </tr>
                </tbody>
              </Table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
