import { Router } from "express";

import CategoryController from "../controllers/CategoryController";

const categoryRoutes = Router();

const categoryController = new CategoryController();

categoryRoutes.get("/", categoryController.list);
categoryRoutes.get("/{id}", categoryController.show);
categoryRoutes.post("/", categoryController.create);
categoryRoutes.put("/", categoryController.update);
categoryRoutes.delete("/", categoryController.remove);

export { categoryRoutes };
