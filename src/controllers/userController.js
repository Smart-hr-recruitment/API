const services = require('../services');

module.exports = userController = (req, res) => {
  const body   = req.body;  //example how to get body
  const params = req.params;//example how to get params

  return services.getData(body, params);
};

