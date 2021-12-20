const { Router } = require("express");
const { BookController } = require("../controllers");
const { authMiddleware } = require("../middleware");

const BookRouter = Router();

BookRouter.use(authMiddleware);

BookRouter.get("/", BookController.getBooks);
BookRouter.get("/:id", BookController.getSingleBook);
BookRouter.post("/", BookController.createBook);
BookRouter.patch("/:id", BookController.updateBook);
BookRouter.delete("/:id", BookController.deleteBook);

module.exports = BookRouter;
