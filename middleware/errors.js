exports.errorLogger = (err, req, res, next) => {
    req.logger.req_id = req.logger.fields.req_id;
    req.logger.error(err, req.logger.fields.req_id);
  
    return res.status(500).send("A critical error has occurred.");
}