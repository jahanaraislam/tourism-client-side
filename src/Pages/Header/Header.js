import React from "react";

import "./Header.css";
import Banner from "../Home/Banner/Banner";
import Menubar from "./Menubar/Menubar";
const Header = () => {
  return (
    <div>

      <header>
        <Menubar></Menubar>
        <div className="overlay">

          <Banner />
        </div>
      </header>
    </div>
  );
};

export default Header;
