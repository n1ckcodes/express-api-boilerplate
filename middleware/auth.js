exports.authorization = () => {
  return (req, res, next) => {
    //Add logic here to perform jwt or other validation
    const isAuthorized = false;

    if (isAuthorized) {
      next();
    } else {
      res.status(401).send("You are not authorized to access this data.");
    }
  };
};

//Demo func
exports.isNotAuthorized = () => {
  return (req, res, next) => {
    res.status(401).send("You are not authorized to access this data.");
  };
};

//Demo func
exports.isAuthorized = () => {
    return (req, res, next) => {
      console.log(`User is authorized`)
      next()
    };
  };
