import React, { useEffect, useState } from "react";
import "./ManageAllBooking.css";
import Menubar from "../Header/Menubar/Menubar";
import { Table } from "react-bootstrap";

const ManageAllBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [control, setControl] = useState(false);

  const [status, setStatus] = useState("pending");
  useEffect(() => {
    fetch("https://calm-waters-83697.herokuapp.com/allBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [control]);

  const handleApproved = (id) => {
    const data = { status: "Approved" };
    fetch(`https://calm-waters-83697.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          
          setStatus("Approved")
          
        } else {
          setStatus("pending");
        }
      });
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, u want to delete it?");
    if (proceed) {
      fetch(`https://calm-waters-83697.herokuapp.com/Managebooking/${id}`, {
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
          All Booking : {bookings.length} Destinations
        </div>
        <div className="row text-center my-5">
          {bookings?.map((pd, index) => (
            <div className="col-12 ">
              <Table className="w-75  mx-auto" striped bordered hover>
                <thead className="fw-bold fs-5">
                  <tr>
                    <th>#</th>
                    <th>User Email</th>
                    <th>Destination</th>

                    <th>status</th>
                    <th>City</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody className="fw-bold">
                  <tr>
                    <td>{index}</td>
                    <td>{pd?.userName}</td>
                    <td>{pd.countryName}</td>
                    <td>{pd.status}</td>
                    <td>{pd?.city}</td>
                    <td>{pd.address}</td>
                    <button
                      onClick={() => handleApproved(pd?._id)}
                      className="btn my-1 fw-bold fs-6 w-75 mx-auto bg-success px-4"
                    >
                      Approved
                    </button>
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

export default ManageAllBooking;
