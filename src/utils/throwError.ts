import { Request, Response, NextFunction } from 'express';
const throwError = (statusCode: number, message: string, next: NextFunction): void => {
    // const error = new Error(message || "Something went wrong") as any;
    // error.statusCode = statusCode;
    // console.log(`Error: ${message} / Status Code: ${statusCode}`);
    next({ statusCode, message });
    // throw error;
}

export default throwError;