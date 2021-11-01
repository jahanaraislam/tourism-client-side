import React from "react";
import "./Menubar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

const Menubar = () => {
  const { user, handleLogout } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" className="nav ">
      <Container>
        <Navbar.Brand>
          <img src={logoImg} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav">
          <i className="fas fa-sliders-h"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-item" to="/home">
              Home
            </Link>
            <Link className="nav-item" to="/tours">
             Tours
            </Link>
            {user.email && (
              <Link className="nav-item" to="/myBooking">
              My Booking
            </Link>
            )}
            {user.email && (
              <Link className="nav-item" to="/manageAllBooking">
              Manage All Booking
            </Link>
            )}
            {user.email && (
              <Link className="nav-item pe-2" to="/addTour">
              Add Tour
            </Link>
            )}
            
            {user.email && (
              <span
                style={{ color: "peru", fontWeight: "900", fontSize: "17px" }}
              >
                {user?.displayName}
              </span>
            )}
            {user.email ? (
              <button
                onClick={handleLogout}
                className="ms-3 btn  login-btn text-uppercase"
              >
                Logout
              </button>
            ) : (
              <Link className="login-btn text-decoration-none ms-3" to="/login">
                LOGIN
              </Link>
            )}

            <i className="fas fa-shopping-cart text-white mt-2 ms-2 fs-5"></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;


