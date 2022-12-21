import React, { Component, useState } from "react";
import css from "../Flavours.css";
import vanilla from "../Vanilla.png";
import cart from "../_shopping-cart_90604.png";

export class Flavours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavour: props.flavour,
      image: props.image,
      type: props.type,
      price: props.price,
      description: props.description,
      count: 1,
      amount: "",
      arraynum: props.arraynum,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      if (prevState.count < 9) {
        return { count: prevState.count + 1 };
      }
    });
  };

  handleClick2 = () => {
    this.setState((prevState) => {
      if (prevState.count > 1) {
        return { count: prevState.count - 1 };
      }
    });
  };

  handleClick3 = (e) => {
    e.preventDefault();
    var getlocalstorage =
      window.sessionStorage.getItem("amountofflavours") || "[]";
    var flavour = this.state.flavour;
    var count = this.state.count;
    this.setState(() => {
      {
        return { amount: this.state.count, count: 1 };
      }
    });
    var parsedlocal = JSON.parse(getlocalstorage);
    console.log(parsedlocal);
    parsedlocal[this.state.arraynum].amount = this.state.count;

    window.sessionStorage.setItem(
      "amountofflavours" || "[]",
      JSON.stringify(parsedlocal)
    );
  };

  render() {
    return (
      <div id="flavourcomponent">
        <div id="flavourimage">
          <img src={this.state.image} id="image" alt="flavourimage" />
        </div>
        <div id="flavourtypediv">
          <h3 className={this.state.type}>{this.state.type}</h3>
        </div>
        <div id="flavourname">
          <h1 id="flavournametext">{this.state.flavour}</h1>
        </div>
        <div id="descriptiondiv">
          <h3 id="descriptiontext">{this.state.description}</h3>
        </div>
        <div id="bottomgrid">
          <div id="price">
            <h3 id="pricetext">{this.state.price}</h3>
          </div>
          <div id="count">
            <button id="minus" onClick={this.handleClick2}>
              -
            </button>
            <h3 id="counttext">{this.state.count}</h3>
            <button id="plus" onClick={this.handleClick}>
              +
            </button>
          </div>
          <button id="addtocart" onClick={this.handleClick3}>
            <img src={cart} id="carticon" alt="cart" />
          </button>
        </div>
      </div>
    );
  }
}

export default Flavours;
