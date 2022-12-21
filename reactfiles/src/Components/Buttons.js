import "../Buttons.css";
import React, { Component } from "react";

export default function Buttons() {
  return (
    <div id="buttondiv">
      <a href="/cart" id="firstbutton">
        View cart
      </a>
      <a href="/checkout" id="secondbutton">
        Proceed to check out
      </a>
    </div>
  );
}
