import { MapContainer, TileLayer, Polygon, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
function Map(props) {
  const [center, setCenter] = useState([37.55791, -77.453143]);
  const [clickMarker, setClickMarker] = useState();
  const [clickLocation, setClickLocation] = useState();
  //array of json objects
  const [foodList, setFoodList] = useState(null);
  clickMarker
    ? console.log(` Click Marker outside fetch = ${clickMarker.id}`)
    : console.log(`Marker has not been clicked yet`);
  let interLocation = [];

  // const fetchRestData = async () => {
  //     const response = await fetch('api/')
  // }

  //provides access to current url and allows me to push a new route
  let history = useHistory();

  //state of

  //   useEffect(() => {
  //     if (!clickMarker) {
  //       fetch("/api/restaurants")
  //         .then((res) => res.json())
  //         .then((resList) => {
  //           setFoodList(resList);
  //         });
  //     }
  //   });

  //   console.log(props.restaurantId);
  //   console.log("click = " + clickMarker.name);
  return (
    <>
      <MapContainer
        center={center}
        zoom={13}
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
        //Kuba Kuba
        <Marker
          position={[37.551296050000005, -77.45904236218541]}
          eventHandlers={{
            click: () => {
              history.push(`/api/kuba-kuba`);
            },
          }}
        />
        //perlys
        <Marker
          position={[37.543881, -77.441436]}
          eventHandlers={{
            click: () => {
              history.push(`/api/perlys`);
            },
          }}
        />
        //shyndigz
        <Marker
          position={[37.547627, -77.465414]}
          eventHandlers={{
            click: () => {
              history.push(`/api/shyndigz`);
            },
          }}
        />
        //The Savory Grain
        <Marker
          position={[37.556951, -77.461167]}
          eventHandlers={{
            click: () => {
              history.push(`/api/the-savory-grain`);
            },
          }}
        />
        //edo squid
        <Marker
          position={[37.550485, -77.453266]}
          eventHandlers={{
            click: () => {
              history.push(`/api/edo-squid`);
            },
          }}
        />
        //supper
        <Marker
          position={[37.565599, -77.47306]}
          eventHandlers={{
            click: () => {
              history.push(`/api/supper`);
            },
          }}
        />
        //sabai
        <Marker
          position={[37.561575, -77.469002]}
          eventHandlers={{
            click: () => {
              history.push(`/api/sabai`);
            },
          }}
        />
        //tazza kitchen
        <Marker
          position={[37.569892, -77.473867]}
          eventHandlers={{
            click: () => {
              history.push(`/api/tazza-kitchen`);
            },
          }}
        />
        //elephant thai
        <Marker
          position={[37.576079, -77.487292]}
          eventHandlers={{
            click: () => {
              history.push(`/api/elephant-thai`);
            },
          }}
        />
        //soul taco
        <Marker
          position={[37.536279, -77.433358]}
          eventHandlers={{
            click: () => {
              history.push(`/api/soul-taco`);
            },
          }}
        />
        //the tobacco company
        <Marker
          position={[37.535707, -77.434613]}
          eventHandlers={{
            click: () => {
              history.push(`/api/the-tobacco-company-restaurant`);
            },
          }}
        />
        //sine irish pub
        <Marker
          position={[37.5346, -77.43286]}
          eventHandlers={{
            click: () => {
              history.push(`/api/sine-irish-pub`);
            },
          }}
        />
        //bookbinders
        <Marker
          position={[37.52927, -77.423703]}
          eventHandlers={{
            click: () => {
              history.push(`/api/bookbinders-seafood-and-steakhouse`);
            },
          }}
        />
        //the boathouse
        <Marker
          position={[37.518125, -77.416071]}
          eventHandlers={{
            click: () => {
              history.push(`/api/the-boathouse-at-rocketts-landing`);
            },
          }}
        />
        //stone brewing
        <Marker
          position={[37.520984, -77.412432]}
          eventHandlers={{
            click: () => {
              history.push(`/api/stone-brewing-tap-room`);
            },
          }}
        />
      </MapContainer>
    </>
  );
}

export default Map;

//-----------Logic for Future Refactor to Generate Markers Dynamically--------//
/* <Marker
position={[37.551296050000005, -77.45904236218541]}
eventHandlers={{
  click: (e) => {
    console.log({ e });
    console.log(`marker location = ${e.latlng.lat}`);
    interLocation.push(e.latlng.lat);
    interLocation.push(e.latlng.lng);
    setClickLocation(interLocation);

    //fetch data from array of json restaurant objects
    //once fetched map that array and iterate through each object
    //if the obj.lat === to the e.latlng.lat
    //then set that individual obj to the clickMarker
    //now that clickMarker has the relevant json obj
    //use that current obj id to populate the history push for new route
    fetch("/api/restaurants")
      .then((res) => res.json())
      .then((restaurantsObj) => {
        restaurantsObj.map((restObj) => {
          console.log(`Inside fetch current lat = ${clickLocation}`);
          // console.log(`Rest Obj lat = ${restObj.lat}`);
          if (+restObj.lat == e.latlng.lat) {
            console.log(`Inside conditional fetch`);
            setClickMarker(restObj);
          }
        });
      });
    console.log(`click marker = ${clickMarker}`);
    //   history.push(`/api/`);
  },
}}
/> */
