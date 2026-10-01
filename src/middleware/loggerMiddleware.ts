import {Request , Response, NextFunction} from "express";
export const apiLogger = (req:Request, res: Response, next: NextFunction) => {
    console.log(`Api Requested: ${req.originalUrl} / Method: ${req.method}}`);
    next();
}