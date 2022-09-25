import { Router } from "express";

import authMiddleware from "middlewares/authMiddleware";

import { authRoutes, userRoutes } from "modules/user/http/routes";
import { menuRoutes } from "modules/menu/http/routes";

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);

routes.use(authMiddleware);
routes.use("/menu", menuRoutes);

export default routes;
