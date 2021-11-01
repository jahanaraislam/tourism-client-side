import React from "react";
import "./Footer.css";
import footerImg from "../../assets/logo.png";


const Footer = () => {
  // footer start
  return (
    <div className="footer-container">
      <div className="footer container p-5 mx-auto row mt-5">
        <div className="col-md-6 col-lg-3 col-12 ">
          <img src={footerImg} alt="" />
          <hr className="footer-hr" />
          <p className="footer-text pe-3">
            Birdily provides you with a full solution for booking system,
            travel, and tour management. Its stunning beauty and the fashionable
            design will help you to own an awesome travel site for your
            business.
          </p>
         <div className="row pe-5">
         <div className="col-12 text-center mt-4">
          <ul className="icon list-unstyled d-flex ">
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
              <li>
                <i className="fab fa-facebook-messenger"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
         </div>
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Quick Link</h3>
          <hr className="footer-hr" />
          <p className="footer-text">Home</p>
          <p className="footer-text">Tours</p>
          <p className="footer-text">My Orders</p>
          <p className="footer-text">Manage All Order</p>
          <p className="footer-text">Add Tour</p>
          <p className="footer-text">Contact</p>
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Tours</h3>
          <hr className="footer-hr" />
          <p className="footer-text">Italy</p>
          <p className="footer-text">Iceland Northern Lights Adventure</p>
          <p className="footer-text">Greece</p>
          <p className="footer-text">London Discovery</p>
          <p className="footer-text"> Turkey</p>
          <p className="footer-text">Egypt</p>
          
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Book Tour</h3>
          <hr className="footer-hr" />
          <p className="footer-text">(1800) 574 9687</p>
          <p className="footer-text">65, Street, New Youk, MAC 5245</p>
          <p className="footer-text"> hi@Birdily.com</p>
          <p className="footer-text">
            Contact us now for a quote about consultation ( Available 24/7 )
          </p>
         
        </div>
       
        
        <p className="footer-last-text text-center mt-5">
          © 2021 -Birdily. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
