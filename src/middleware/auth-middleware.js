const { logger } = require("../config/config");
const { auth } = require("../firebase/firebase");

async function authMiddleware(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const bearerToken = req.headers.authorization.split(" ")[1];

    try {
      const userClaims = await auth.verifyIdToken(bearerToken);
      const { email, uid } = userClaims;

      logger.debug(bearerToken);

      req.user = {
        email,
        uid,
      };

      next();
    } catch (error) {
      next(error);
    }
  } else {
    res.status(401).send({
      data: [],
      error: "Unauthorized",
    });
  }
}

module.exports = authMiddleware;
