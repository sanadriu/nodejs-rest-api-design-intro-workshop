const { Router } = require("express");
const { Editorial } = require("../controllers");

const EditorialRouter = Router();

EditorialRouter.get("/", Editorial.getEditorials);
EditorialRouter.get("/:id", Editorial.getSingleEditorial);
EditorialRouter.post("/", Editorial.createEditorial);
EditorialRouter.put("/:id", Editorial.updateEditorial);
EditorialRouter.delete("/:id", Editorial.deleteEditorial);

module.exports = EditorialRouter;
