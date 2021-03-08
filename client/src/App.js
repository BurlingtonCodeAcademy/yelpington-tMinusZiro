import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Map from "./components/Map";
import Restaurants from "./components/Restaurants";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";

function App() {
  //state for centering initial map on load of home page
  const [center, setCenter] = useState([37.55791, -77.453143]);

  //using react router to set up a switch for two different paths
  //two paths include: home page and restaurant page
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurant/:id" component={Restaurant} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
