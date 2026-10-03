import { Request, Response, NextFunction } from 'express';
const throwError = (statusCode: number, message: string, res: Response): never => {
    // const error = new Error(message || "Something went wrong") as any;
    // error.statusCode = statusCode;
    res.status(statusCode).json({ message: message });
    // throw error;
}

export default throwError;