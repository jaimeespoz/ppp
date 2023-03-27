const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  //   res.render("index");
  // res.sendFile(`__dirname/public/index.html`);
  //res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = router;
