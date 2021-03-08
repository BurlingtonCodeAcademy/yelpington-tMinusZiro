import React from "react";
import { MapContainer, TileLayer, Polygon, Marker } from "react-leaflet";
import { useState, useEffect } from "react";

const Restaurant = (props) => {
  //state for individual restaurant
  const [divRest, setDivRest] = useState(null);
  //state for user comments
  const [comment, setComment] = useState("");

  //fetch wrapped in a useEffect hook to constantly update restaurant page info
  useEffect(() => {
    if (!divRest) {
      fetch(`/restaurant/${props.match.params.id}`)
        .then((res) => res.json())
        .then((singleRestaurant) => {
          setDivRest(singleRestaurant);
        });
    }
  });

  //set the state of comment constantly as the user writes in the text area
  const onChange = (e) => setComment(e.target.value);

  //synthetic event to store comment in local storage
  const handleFormSubmit = (e) => {
    // setComment(e.target.value);
    localStorage.setItem("comment", JSON.stringify(comment));
  };

  //Restaurant Page Layout
  //Matches a very similar one to the home page except the info sidebar has different content
  //map and info bar are stacked next to each other in a row
  return (
    <div id="restaurant-page-body">
      <header>
        <h1>RVA Yelpington</h1>
      </header>
      <main className="home-main">
        {/*-------Info Section ------------*/}
        <div id="restaurant-page-nav">
          <div id="restInfo-and-comments">
            <h2>{divRest ? divRest.name : "Loading"}</h2>

            <h4>
              <strong className="rInfo-title">Addresss:&nbsp;</strong>{" "}
              {divRest ? divRest.address : "Loading"},{" "}
              {divRest ? divRest.city : "Loading"},{" "}
              {divRest ? divRest.state : "Loading"}{" "}
              {divRest ? divRest.zip : "Loading"}
            </h4>
            <h4>
              {" "}
              <strong className="rInfo-title">Hours:&nbsp;</strong>
              {divRest ? divRest.hours : "Loading"}
            </h4>
            <h4>
              {" "}
              <strong className="rInfo-title">Phone:&nbsp;</strong>
              {divRest ? divRest.phone : "Loading"}
            </h4>
            <div id="scroll-comments">
              <ul>
                <strong className="rInfo-title">Comments:</strong>
                <br />
                <li>{divRest ? divRest.notes : "Loading"}</li>
                <li>{}</li>
              </ul>
            </div>
          </div>
          {/*Form inside Info Bar */}
          <div id="form-box">
            <form id="form-wrapper" onSubmit={handleFormSubmit}>
              <textarea
                name="user_comment"
                placeholder="Comment"
                rows="5"
                onChange={onChange}
              />

              <input
                id="submit-button"
                type="submit"
                name="user_submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
        {/*-----Map Section-----*/}
        <div className="map-wrapper">
          <MapContainer
            center={
              divRest ? [divRest.lat, divRest.lon] : [37.55791, -77.453143]
            }
            zoom={14}
            scrollWheelZoom={true}
            zoomControl={true}
            touchZoom={true}
            dragging={true}
            style={{ height: "70vh", width: "60vw" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={
                divRest ? [divRest.lat, divRest.lon] : [37.55791, -77.453143]
              }
            />
          </MapContainer>
        </div>
      </main>
    </div>
  );
};

export default Restaurant;
