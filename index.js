const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const uuid = require("uuid");
const app = express();
const { logger } = require("./middleware/logger");

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
const auth = require("./routes/auth/controller");
const account = require("./routes/account/controller");
//Demo routes for catching errors via middleware and logging
const errors = require("./routes/errors/controller");

app.use((req, res, next) => {
  //give a uuid so that the request can be tracked
  req.logger = logger.child({ req_id: uuid.v4() }, true);
  req.logger.info({ req });
  res.on("finish", () => req.logger.info({ res }));
  next();
});

//Route base paths
app.use("/api/auth", auth);
app.use("/api/account", account);
app.use("/api/errors", errors);

app.get("/api/status", async (req, res) => {
  res.send("Service is running");
});

app.use((err, req, res, next) => {
  req.logger.req_id = req.logger.fields.req_id
  req.logger.error(err, req.logger.fields.req_id)
  
  return res.status(500).send("A critical error has occurred.");
});

const port = process.env.PORT || 8081;

app.listen(3000, () => {
  logger.info("App listening on port 3000");
});
