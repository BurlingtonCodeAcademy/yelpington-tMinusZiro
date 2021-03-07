const express = require("express");

const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("./client/public"));

//route for list of restaurant
app.get("/api", (req, res) => {
  res.sendFile(path.resolve("./api/directory.json"));
});
//route for array of restaurant json objects
app.get("/api/restaurants", (req, res) => {
  res.sendFile(path.resolve("./api/restaurants.json"));
});

//route for individual restaurant
app.get("/api/:id", (req, res) => {
  res.sendFile(path.resolve(`./api/${req.params.id}.json`));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/public/index.html"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
