const { auth } = require("../firebase/firebase");

async function authMiddleware(req, res, next) {
  if (req.headers.auth && req.headers.authorization.startsWith("Bearer")) {
    const bearerToken = req.headers.authorization.split(" ").pop();

    try {
      const userClaims = await auth.verifyIdToken(bearerToken);
      const { email, uid } = userClaims;

      req.user = {
        email,
        uid,
      };
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(401).send({
      data: [],
      error: "Not authorized",
    });
  }
}

module.exports = authMiddleware;
