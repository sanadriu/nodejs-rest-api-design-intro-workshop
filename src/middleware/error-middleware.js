const { logger } = require("../config/config");

function errorMiddleware(err, req, res, next) {
  logger.error(err);

  if (req.headersSent) {
    next(err);
    return;
  }

  res.status(500).send({
    data: null,
    error: "Something went wrong",
  });
}

module.exports = errorMiddleware;
