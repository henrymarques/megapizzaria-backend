import { NextFunction, Request, Response } from "express";

import AppError from "../AppError";

export default function errorHandlerMiddleware(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  return response.status(500).json({
    status: "error",
    message: "Não foi possível processar sua requisição",
  });
}
