var express = require("express");
var router = express.Router();
var log = require("../../middleware/logger");



router.post("/login", async (req, res, next) => {
  try{
    throw new Error("critical error!")
  }catch(e){
    next(e)
  }
});

module.exports = router;
