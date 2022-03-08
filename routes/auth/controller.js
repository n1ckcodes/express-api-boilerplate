var express = require("express");
var router = express.Router();
var log = require("../../middleware/logger");

const AuthUtils = require("./utils");

router.post("/login", async (req, res) => {
  log.logger.info("This was logged");
  const { username, password } = req.body;
  await AuthUtils.login(username, password).catch((e) => {
    //add error logging here
  });
  console.log(username, password);
  res.send("Logged in");
});

module.exports = router;
