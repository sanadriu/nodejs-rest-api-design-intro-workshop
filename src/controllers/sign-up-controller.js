const { User } = require("../models");

async function signUp(req, res, next) {
  try {
    const { uid, email } = req.user;

    const user = await User.findOne({ email });

    if (user) return res.sendStatus(200);

    const user = await User.create({
      _id: uid,
      email,
    });

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp,
};
