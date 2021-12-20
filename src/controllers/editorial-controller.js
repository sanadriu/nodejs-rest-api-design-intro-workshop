const { EditorialModel } = require("../models");

async function getEditorials(req, res, next) {
  try {
    const editorials = await EditorialModel.find({})
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

    const editorial = await EditorialModel.find({ _id })
      .populate({ path: "authors", select: "firstName lastName" })
      .populate({ path: "publishedBooks", select: "title" })
      .select("-createdAt -updatedAt -__v")
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

    const editorial = await EditorialModel.create({
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

    const editorial = await EditorialModel.findOneAndUpdate(
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

    const editorial = await EditorialModel.findOneAndDelete({ _id });

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
