const { UserModel } = require("../models");

async function getUsers(req, res, next) {
  try {
    const users = await UserModel.find({})
      .select("-createdAt -updatedAt -__v")
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
    const user = await UserModel.findOne({ _id })
      .select("-createdAt -updatedAt -__v")
      .lean()
      .exec();

    res.status(200).send({ success: true, data: user });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const { firstName, lastName, email, speaks } = req.body;

    const user = await UserModel.create({
      firstName,
      lastName,
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
    const { firstName, lastName, speaks } = req.body;

    const user = await UserModel.findOneAndReplace(
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

    const user = await UserModel.findOneAndDelete({ _id });

    res.status(200).send({
      success: true,
      data: user._id,
    });
  } catch (error) {
    next(error);
  }
}

async function signUp(req, res, next) {
  try {
    const { uid, email } = req.user;

    const user = await UserModel.findOne({ email });

    if (user) return res.sendStatus(200);

    await UserModel.create({
      uid,
      email,
    });

    res.sendStatus(201);
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
  signUp,
};
