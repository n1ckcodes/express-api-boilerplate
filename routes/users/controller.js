var express = require("express");
var router = express.Router();
var log = require("../../middleware/logger");
// middleware that is specific to this router

//simple get request
router.get("/foo", async (req, res) => {
  log.logger.info("This was logged");
  res.send("foo");
});

module.exports = router;
