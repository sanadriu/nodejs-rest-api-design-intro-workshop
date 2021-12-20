const { Editorial } = require("../models");

async function getEditorials(req, res, next) {
  try {
    const editorials = await Editorial.find({})
      .select("-createdAt -updatedAt -__v")
      .lean()
      .exec();

    res.status(200).send({
      success: true,
      data: editorials,
    });
  } catch (error) {
    next(error);
  }
}

async function getSingleEditorial(req, res, next) {
  try {
    const { id: _id } = req.params;

    const editorial = await Editorial.find({ _id })
      .select("-createdAt -updatedAt -__v")
      .populate({ path: "authors", select: "firstName lastName" })
      .populate("publishedBooks")
      .lean()
      .exec();

    res.status(200).send({
      success: true,
      data: editorial,
    });
  } catch (error) {
    next(error);
  }
}

async function createEditorial(req, res, next) {
  try {
    const { name, dateOfCreation, publishedBooks, authors } = req.body;

    const editorial = await Editorial.create({
      name,
      dateOfCreation,
      publishedBooks,
      authors,
    });

    res.status(201).send({
      success: true,
      data: editorial._id,
    });
  } catch (error) {
    next(error);
  }
}

async function updateEditorial(req, res, next) {
  try {
    const { id: _id } = req.params;
    const { name, dateOfCreation, publishedBooks, authors } = req.body;

    const editorial = await Editorial.findOneAndUpdate(
      { _id },
      {
        name,
        dateOfCreation,
        publishedBooks,
        authors,
      },
      { new: true, runValidator: true },
    );

    res.status(200).send({
      success: true,
      data: editorial,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteEditorial(req, res, next) {
  try {
    const { id: _id } = req.params;

    const editorial = await Editorial.findOneAndDelete({ _id });

    res.status(200).send({
      success: true,
      data: editorial._id,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getEditorials,
  getSingleEditorial,
  createEditorial,
  updateEditorial,
  deleteEditorial,
};
