const bunyan = require("bunyan");

exports.logger = bunyan.createLogger({
  name: "express-api",
  serializers: bunyan.stdSerializers,
    /*
        Uncomment below to write logs to a file
    
        streams: [{
            path: './logs/logs.log',
        }]
    */
});
