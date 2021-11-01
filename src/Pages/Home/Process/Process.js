import React from "react";
import "./Process.css";
import process from "../../../assets/process.jpg";
// process
const Process = () => {
    return (
        // new patient process section
        <div className="process-container ">
            <div className="process row py-5  container mx-auto">
                {/* process image */}
                <div className="col-lg-6 col-md-12 process-left">
                    <img className="img-fluid mt-5 px-5" src={process} alt="" />
                </div>
                {/* process text */}
                <div className="col-lg-6 col-md-12 process-right mt-5">
                    <h6 className="sub-title ">
                        <i className="fas fa-grip-lines"></i>
                        <i className="fas fa-grip-lines"></i>
                        <i className="fas fa-grip-lines"></i>THE PROCESS
                    </h6>
                    <h2 className="my-4">An Amazing Tagline For Your Process...</h2>
                    <p>
                      Birdily, There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.
                    </p>
                    <div className="d-flex mt-5 mb-3">
                        <i className="fas fa-grin-hearts"></i>
                        <div className="mx-4">
                            <h6 className="title">TALK TO US FIRST</h6>
                            <p>
                                Struggling? Get free, confidential support from a real human
                                over phone, text or webchat.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <i className="fas fa-address-book"></i>
                        <div className="mx-4">
                            <h6 className="title">BOOK YOUR Tour</h6>
                            <p>
                                Simplify your booking process—Get contracts signed,
                                questionnaires answered, and fees paid—all during booking.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <i className="far fa-handshake"></i>
                        <div className="mx-4">
                            <h6 className="title">Go To  Your Destination</h6>
                            <p>
                                Turn a gray day into all the colors of the rainbow by going on a Tour with a friends like us
                                in this imaginative Level 2 Ready-to-Read inspired by Birdily.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;