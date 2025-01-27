import { Request, Response } from "express";
import AppError from "../errors/AppError";

function errorHandling(err: unknown, _req: Request, res: Response) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
}

export default errorHandling;
