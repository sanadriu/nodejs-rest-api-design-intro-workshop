const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");

const { Book, User, Editorial } = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use("/books", Book);
app.use("/users", User);
app.use("/editorials", Editorial);

module.exports = app;
