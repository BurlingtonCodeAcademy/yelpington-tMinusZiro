import React from "react";
import { MapContainer, TileLayer, Polygon, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
const Restaurant = (props) => {
  //state for individual restaurant
  const [divRest, setDivRest] = useState(null);

  useEffect(() => {
    if (!divRest) {
      fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((singleRestaurant) => {
          setDivRest(singleRestaurant);
        });
    }
  });

  function generateMap() {
    if (divRest.lat) {
      console.log(`Page Lat = ${divRest.lat}`);
      <MapContainer
        center={[divRest.lat, divRest.lon]}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={true}
        touchZoom={true}
        dragging={true}
        style={{ height: "500px", width: "800px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[divRest.lat, divRest.lon]} />
      </MapContainer>;
    }
  }

  return (
    <div id="restaurant-page-body">
      <header>
        <h1>RVA Yelpington</h1>
      </header>
      <main className="home-main">
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
              <h4>
                <strong className="rInfo-title">Comments:</strong>
                <br />
                {divRest ? divRest.notes : "Loading"}
              </h4>
            </div>
          </div>
          <div id="form-box">
            <form id="form-wrapper" method="POST" action="">
              <input
                id="name-input"
                type="text"
                name="user_name"
                placeholder="User Name"
              />

              <textarea name="user_comment" placeholder="Comment" rows="5" />

              <input
                id="submit-button"
                type="submit"
                name="user_submit"
                value="Submit"
              />
            </form>
          </div>
        </div>

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
