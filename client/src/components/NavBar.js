import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = (props) => {
  //fetch wrapped in a useEffect hook to continuously fetch the restaurant id data
  useEffect(() => {
    if (props.restaurantId.length === 0) {
      //guard clause to stop fetching after restaurant state has more than one item
      fetch("/api")
        .then((res) => res.json())
        .then((restId) => {
          props.setRestaurantId(restId); //set state from converted JSON
        });
    }
  });

  //sanitize restaurant id and return a properly formatted title
  function saniString(str) {
    let strArray = str.split("-");
    let newArray = strArray.map((word) => {
      let firstLetter = word[0].toUpperCase();
      let lowerCaseWord = word.slice(1).toLowerCase();
      word = firstLetter + lowerCaseWord;
      return word;
    });
    return newArray.join(" ");
  }

  //generate list of all restaurants from fetched data using map method
  return (
    <div>
      <h2>Richmond Restaurants</h2>
      <ul>
        {props.restaurantId.map((restName, index) => {
          return (
            <h4 key={index}>
              <Link className="nav-list-item" to={`/restaurant/${restName}`}>
                {saniString(restName)}
              </Link>
            </h4>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
