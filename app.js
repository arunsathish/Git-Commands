const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/signin", (req, res) => {
  const username = "hemanth";
  res.send("Sign In");
});

app.listen(4000, () => console.log("Running on port http://localhost:4000"));
