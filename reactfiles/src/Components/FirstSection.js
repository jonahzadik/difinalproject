import React from "react";
import css from "../FirstSection.css";
import icecreamcone from "../icecreamimage.png";
import truck from "../delivercar.png";
import store from "../storeicon.png";
import wallet from "../affordable-icon.png";
import leaf from "../plants.png";

function FirstSection() {
  return (
    <div className="parent">
      <div id="heading">
        Get the perfect scoop at your<br></br>doorstep, anytime, anywhere!
      </div>
      <div id="subheading">
        Simply add your flavours of your choice to the cart, check out, and
        boom! <br></br> Your ice cream will be on its way.
      </div>
      <div id="infodiv" className="parent2">
        <div id="info1" className="infotext">
          <div id="truckicon">
            <img src={truck} id="truck" alt="truck" />
          </div>
          <h1 id="infodescription">Fast and easy delivery</h1>
        </div>
        <div id="info2" className="infotext">
          <div id="storeicon">
            <img src={store} id="store" alt="store" />
          </div>
          <h1 id="infodescription">Always made in house</h1>
        </div>
        <div id="info3" className="infotext">
          <div id="walleticon">
            <img src={wallet} id="wallet" alt="wallet" />
          </div>
          <h1 id="infodescription">Affordable pricing</h1>
        </div>
        <div id="info4" className="infotext">
          <div id="leaficon">
            <img src={leaf} id="leaf" alt="leaf" />
          </div>
          <h1 id="infodescription">Fresh, premium ingredients</h1>
        </div>
      </div>
      <div id="icecreamcone">
        <img src={icecreamcone} id="icecreamimage" alt="icecreamcone" />
      </div>
    </div>
  );
}

export default FirstSection;
