import React from "react";
import Map from "./Map";
import NavBar from "./NavBar";
import { useState } from "react";

const Home = (props) => {
  //------STATE------//
  //map starting center location in richmond
  const [center, setCenter] = useState([37.55791, -77.453143]);
  //Restaurant Page map location - tied to relevant restaurants location
  const [viewCenter, setViewCenter] = useState([]);
  //restaurant id directory
  const [restaurantId, setRestaurantId] = useState([]);

  //the main home page has a header and then stacked next to each other, a map with pins and a nav bar
  //both the nav bar and map are both imported components
  return (
    <div id="home-body">
      <header>
        <h1>RVA Yelpington</h1>
      </header>
      <main className="home-main">
        <div className="nav-wrapper">
          <NavBar
            restaurantId={restaurantId}
            setRestaurantId={setRestaurantId}
          />
        </div>
        <div className="map-wrapper">
          <Map />
        </div>
      </main>
    </div>
  );
};

export default Home;
