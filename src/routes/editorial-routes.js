const { Router } = require("express");
const { EditorialController } = require("../controllers");
const { authMiddleware } = require("../middleware");

const EditorialRouter = Router();

EditorialRouter.use(authMiddleware);

EditorialRouter.get("/", EditorialController.getEditorials);
EditorialRouter.get("/:id", EditorialController.getSingleEditorial);
EditorialRouter.post("/", EditorialController.createEditorial);
EditorialRouter.put("/:id", EditorialController.updateEditorial);
EditorialRouter.delete("/:id", EditorialController.deleteEditorial);

module.exports = EditorialRouter;
