import { Router } from "express";

import MenuController from "../controllers/MenuController";

const menuRoutes = Router();

const menuController = new MenuController();

menuRoutes.get("/", menuController.list);
menuRoutes.get("/{id}", menuController.show);
menuRoutes.post("/", menuController.create);
menuRoutes.put("/", menuController.update);
menuRoutes.delete("/", menuController.remove);

export { menuRoutes };
