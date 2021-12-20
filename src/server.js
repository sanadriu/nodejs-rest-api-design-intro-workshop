const config = require("./config/config");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { json } = require("body-parser");

const bookRouter = require("./routes/book-routes");
const UserRouter = require("./routes/user-routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.URL,
  }),
);

app.use("/books", bookRouter);
app.use("/users", UserRouter);

module.exports = app;
