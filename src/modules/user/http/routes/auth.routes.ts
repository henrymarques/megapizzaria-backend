import { Router } from 'express';

import AuthenticationController from '../controllers/AuthenticationController';

const authRoutes = Router();

const authController = new AuthenticationController();

authRoutes.post('/', authController.create);

export { authRoutes };
