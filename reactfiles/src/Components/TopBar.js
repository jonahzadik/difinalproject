import React from "react";
import logo from "../logo.svg";
import location from "../locationicon.png";
import basket from "../basket.png";
import css from "../TopBar.css";

function TopBar() {
  return (
    <div id="topbardiv">
      <img src={logo} className="App-logo" alt="logo" />
      <div id="rightside">
        <div className="locationdiv">
          <img src={location} id="locationpeg" alt="locationicon" />
          <div id="locationtext">Toronto, ON</div>
        </div>
        <a id="basket" href="/cart">
          <img src={basket} id="basketicon" alt="basket" />
        </a>
      </div>
    </div>
  );
}

export default TopBar;
