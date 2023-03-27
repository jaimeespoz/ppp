"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const routes = require("./routes/index");

// settings
app
  //   .set("views", path.join(__dirname, "public"))
  //   .engine("html", require("ejs").renderFile)
  //   .set("view engine", "html")
  .set("port", process.env.PORT || 3000);

// middlewares
app.use(async (req, res, next) => {
  console.log(`${req.url} - ${req.method}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// static files
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "build")));

// routes
// app.use(routes);
app.use("/", routes);

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// start the server
app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});
