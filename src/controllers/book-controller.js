const { BookModel } = require("../models");

async function getBooks(req, res, next) {
  try {
    const books = await BookModel.find({})
      .select("-createdAt -updatedAt -__v")
      .lean()
      .exec();

    res.status(200).send({
      success: true,
      data: books,
    });
  } catch (error) {
    next(error);
  }
}

async function getSingleBook(req, res, next) {
  try {
    const { id: _id } = req.params;

    const book = await BookModel.findOne({ _id })
      .select("-createdAt -updatedAt -__v")
      .populate({
        path: "author",
        select: { _id: 1, firstName: 1, lastName: 1 },
      })
      .lean()
      .exec();

    res.status(200).send({
      success: true,
      data: book,
    });
  } catch (error) {
    next(error);
  }
}

async function createBook(req, res, next) {
  try {
    const { title, author, genre, year, pages } = req.body;

    const book = await BookModel.create({
      title,
      author,
      genre,
      year,
      pages,
    });

    res.status(201).send({
      success: true,
      data: book._id,
    });
  } catch (error) {
    next(error);
  }
}

async function updateBook(req, res, next) {
  try {
    const { id: _id } = req.params;
    const { title, pages } = req.body;

    const book = await BookModel.findOneAndUpdate(
      { _id },
      { title, pages },
      { new: true, runValidator: true },
    );

    res.status(200).send({
      success: true,
      data: book,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteBook(req, res, next) {
  try {
    const { id: _id } = req.params;

    const book = await BookModel.findOneAndDelete({ _id });

    res.status(200).send({
      success: true,
      data: book._id,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
