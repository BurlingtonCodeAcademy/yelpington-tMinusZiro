import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Map from "./components/Map";
import Restaurants from "./components/Restaurants";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";

function App() {
  const [center, setCenter] = useState([37.55791, -77.453143]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/api/:id" component={Restaurant} />
          <Route exact path="/api" component={Restaurants} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
