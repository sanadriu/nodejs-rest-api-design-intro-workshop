const { Router } = require("express");
const { User } = require("../controllers");

const UserRouter = Router();

UserRouter.get("/", User.getUsers);
UserRouter.get("/:id", User.getSingleUser);
UserRouter.post("/", User.createUser);
UserRouter.put("/:id", User.updateUser);
UserRouter.delete("/:id", User.deleteUser);

module.exports = UserRouter;
