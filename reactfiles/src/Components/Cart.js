import React, { Component } from "react";

export class Cart extends Component {
  render() {
    return (
      <div>
        {console.log(
          JSON.parse(window.sessionStorage.getItem("amountofflavours"))
        )}
      </div>
    );
  }
}

export default Cart;
