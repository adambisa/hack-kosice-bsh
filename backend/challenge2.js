"use strict";
const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

// const port = new Serialport("COM3", {
//   baudRate: 9600,
// });

// const parse = port.pipe(new readline({ delimiter: "\r\n" }));

// port.write("1\r\n");
// parse.write("1\r\n");

app.post("/challenge1", (req, res) => {
  //zavolaj vladka
  res.send("req 1 sent");
});

app.post("/kill", (req, res) => {
  //zavolaj vladka

  res.send("req 2 sent");
});

app.post("/bright", (req, res) => {
  res.send("3");
  //zavolaj vladka
});

app.listen(2000, () => {
  console.log("Server started on port 3000");
});
