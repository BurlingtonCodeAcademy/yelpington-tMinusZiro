const express = require("express");

const path = require("path");

const app = express();

//this server will operate on port 5000
const port = process.env.PORT || 5000;

app.use(express.static("./client/public"));

//api endpoint for restaurant directory
app.get("/api", (req, res) => {
  res.sendFile(path.resolve("./api/directory.json"));
});

//api endpoint for individual restaurant
app.get("/api/:id", (req, res) => {
  res.sendFile(path.resolve(`./api/${req.params.id}.json`));
});

//route for fetch to serve individual restaurant data
app.get("/restaurant/:id", (req, res) => {
  res.sendFile(path.resolve(`./api/${req.params.id}.json`));
});

//route for array of restaurant json objects
app.get("/api/restaurants", (req, res) => {
  res.sendFile(path.resolve("./api/restaurants.json"));
});

//catch all for the home page
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/public/index.html"));
});

//sets up the server to listen for the correct port => 5000 in this case
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
