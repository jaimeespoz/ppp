const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.end('Hello world');
  res.render("index");
  // res.sendFile(`__dirname/public/index.html`);
  //res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = router;
