const express = require("express");
const router = express.Router();
const { logger } = require("../../middleware/logger");
const { authorization, isNotAuthorized, isAuthorized } = require("../../middleware/auth.js");

router.post("/authorization", authorization(), async (req, res, next) => {
  return res.send('OK')
});

router.post("/unauthorized", isNotAuthorized(), async (req, res, next) => {
  //middleware should handle response and the 200 response will not be sent
  //instead response will be handled via the middleware
  return res.status(200).send('OK')
});

router.post("/authorized", isAuthorized(), async (req, res, next) => {
   //middleware will run and return successful auth / next() and we will get an okay response
  return res.send('OK')
});

module.exports = router;
