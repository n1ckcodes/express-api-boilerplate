var express = require("express");
var router = express.Router();

router.get("/profile", async (req, res) => {
  res.status(201).json({
    id: 1,
    username: "ncodes",
    email: "testemail@test.com",
    status: "active",
  });
});

router.put("/updateEmail", async (req, res) => {
  const { newEmail } = req.body;
  return res.send(newEmail);
});
module.exports = router;
