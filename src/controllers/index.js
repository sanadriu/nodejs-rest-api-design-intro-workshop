const UserController = require("./user-controller");
const BookController = require("./book-controller");
const EditorialController = require("./editorial-controller");

module.exports = {
  User: UserController,
  Book: BookController,
  Editorial: EditorialController,
};