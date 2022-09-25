import { verify, JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import AppError from "../AppError";
import authConfig from "../config/authConfig";

async function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError("Token inválido ou inexistente", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, authConfig.jwtSecret) as JwtPayload;

    request.user = {
      id: Number(sub ?? "0"),
    };

    next();
  } catch {
    throw new AppError("Token inválido ou inexistente", 401);
  }
}

export default authMiddleware;
