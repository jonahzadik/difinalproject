import React, { useEffect, useState } from "react";
import "../SecondSection.css";
import Flavours from "./Flavours";

var amountofflavours = [
  { amount: 0 },
  { amount: 0 },
  { amount: 0 },
  { amount: 0 },
  { amount: 0 },
  { amount: 0 },
  { amount: 0 },
  { amount: 0 },
  { amount: 0 },
  { amount: 0 },
];
var cartcount = 0;
window.sessionStorage.setItem(
  "amountofflavours",
  JSON.stringify(amountofflavours)
);

var flavourarray = [];

function SecondSection() {
  const [flavours, setFlavours] = useState([]);

  const getFlavours = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/flavours", {
        method: "GET",
      });
      const data = await response.json();
      return setFlavours(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFlavours();
  }, []);

  return (
    <div id="secondsection">
      <div id="textdiv">
        <h1 id="ourflavours">Our Flavours</h1>
        <h3 id="subheading">
          Every base order comes with a single scoop of ice cream and a cone.
        </h3>
      </div>
      <div id="flavours">
        {flavours.map((item, index) => {
          return (
            <div key={index}>
              <Flavours
                className={
                  item.flavourtype === "exotic" ? "exotic" : "traditional"
                }
                flavour={item.flavourname}
                image={item.image}
                type={item.flavourtype}
                price={item.price}
                description={item.description}
                arraynum={item.arraynum}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SecondSection;
