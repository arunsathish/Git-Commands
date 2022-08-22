const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/signin", (req, res) => {
  const username = "hemanth";
  res.send("Sign In");
});

app.get("/login", (req, res) => {
  res.send("Login");
});

app.get("/homepage", (req, res) => {
  res.send({ aboutus: "", image: "https//filename.jpeg" });
});

// Frontend
Axios({
  method: "GET",
  url: "http://182.73.9/homepage",
});

// Some Command

app.listen(4000, () => console.log("Running on port http://localhost:4000"));
