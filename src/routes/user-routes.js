const { Router } = require("express");
const { UserController } = require("../controllers");
const { authMiddleware } = require("../middleware");

const UserRouter = Router();

UserRouter.use(authMiddleware);

UserRouter.get("/", UserController.getUsers);
UserRouter.get("/:id", UserController.getSingleUser);
UserRouter.post("/", UserController.createUser);
UserRouter.patch("/:id", UserController.updateUser);
UserRouter.delete("/:id", UserController.deleteUser);

module.exports = UserRouter;
