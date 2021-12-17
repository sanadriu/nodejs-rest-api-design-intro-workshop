const { Router } = require("express");
const { Book } = require("../controllers");

const BookRouter = Router();

BookRouter.get("/", Book.getBooks);
BookRouter.get("/:id", Book.getSingleBook);
BookRouter.post("/", Book.createBook);
BookRouter.patch("/:id", Book.updateBook);
BookRouter.delete("/:id", Book.deleteBook);

module.exports = BookRouter;
