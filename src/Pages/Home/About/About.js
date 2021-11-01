import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="row about container my-5 mx-auto">
        <div className="col-md-12 col-lg-6 pe-5 col-12 about-left">
          <p>THE WORLD IS YOURS</p>
          <hr className="hr" />
          <h1 className="about-title my-4">Learn More About Birdily</h1>
          <h3 className="about-sub-title my-4">
          Real Life Experience!
          </h3>
         <p>For those who like traveling with friends or family, we offer group tours to Europe and Asia.<br/> You can either gather your own group up to 12 members or join one of the groups that we form for you and other tourists. Contact us for more details today!</p>
        </div>

        <div className="col-md-12 col-lg-6 my-4 col-12 ps-5 about-right">
          <img className="img-fluid px-5 p-3"
            src="https://images.unsplash.com/photo-1600255940203-05fd89e1d7af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRvdXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
