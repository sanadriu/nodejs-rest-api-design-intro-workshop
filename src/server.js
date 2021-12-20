const config = require("./config/config");

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const json = require("body-parser").json;

const { authMiddleware, errorMiddleware } = require("./middleware");
const { UserController } = require("./controllers");
const { BookRouter, UserRouter, EditorialRouter } = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(
  cors({
    origin: config.client.URL,
  }),
);

app.use("/books", BookRouter);
app.use("/users", UserRouter);
app.use("/editorials", EditorialRouter);

app.post("/sign-up", authMiddleware, UserController.signUp);

app.use(errorMiddleware);

module.exports = app;
