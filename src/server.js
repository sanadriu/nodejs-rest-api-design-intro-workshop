const config = require("./config/config");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { json } = require("body-parser");
const errorMiddleware = require("./middleware/error-middleware");

const { Book, User, Editorial } = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.URL,
  }),
);

app.use("/books", Book);
app.use("/users", User);
app.use("/editorials", Editorial);

app.use(errorMiddleware);

module.exports = app;
