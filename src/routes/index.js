const UserRouter = require("./user-routes");
const BookRouter = require("./book-routes");
const EditorialRouter = require("./editorial-routes");

module.exports = {
  User: UserRouter,
  Book: BookRouter,
  Editorial: EditorialRouter,
};
