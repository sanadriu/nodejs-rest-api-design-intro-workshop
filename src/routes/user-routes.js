const { Router } = require("express");
const { User } = require("../controllers");
const authMiddleware = require("../middleware/auth-middleware");

const UserRouter = Router();

UserRouter.use(authMiddleware);

UserRouter.get("/", User.getUsers);
UserRouter.get("/:userId", User.getSingleUser);
UserRouter.post("/", User.createUser);
UserRouter.patch("/:userId", User.updateUser);
UserRouter.delete("/:userId", User.deleteUser);

module.exports = UserRouter;
