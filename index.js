const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
const auth = require("./routes/auth/controller");
const users = require("./routes/users/controller");
const account = require("./routes/account/controller");

//Route base paths
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/account", account);

app.get("/api/status", async (req, res) => {
  res.send("Service is running");
});

const port = process.env.PORT || 8081;

app.listen(port);
console.log("Server started at localhost: " + port);
