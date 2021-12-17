const { User } = require("../models");

async function getUsers(req, res, next) {
  try {
    const users = await User.find({})
      .select({ firstName: 1, lastName: 1, email: 1 })
      .lean()
      .exec();

    res.status(200).send({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

async function getSingleUser(req, res, next) {
  try {
    const { id: _id } = req.params;
    const user = await User.findOne({ _id })
      .select({ __v: 0, password: 0 })
      .lean()
      .exec();

    res.status(200).send({ success: true, data: user });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const { firstName, lastName, password, email, speaks } = req.body;

    const user = await User.create({
      firstName,
      lastName,
      password,
      email,
      speaks,
    });

    res.status(201).send({
      success: true,
      data: user._id,
    });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const { id: _id } = req.params;
    const { firstName, lastName, password, email, speaks } = req.body;

    const user = await User.findOneAndReplace(
      { _id },
      { firstName, lastName, password, email, speaks },
      { new: true, runValidator: true },
    );

    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const { id: _id } = req.params;

    const user = await User.findOneAndDelete({ _id });

    res.status(200).send({
      success: true,
      data: user._id,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
