import mongoose from "mongoose";
import throwError from "../utils/throwError";
import { Request, Response, NextFunction } from "express"; // 1. Added Request and Response types

// 2. Change the function to accept the URL parameter name (e.g., 'id')
export const checkpassObjectId = (paramName: string = 'id') => {
    
    // 3. Return the actual Express middleware function
    return (req: Request, res: Response, next: NextFunction): void => {
        
        // 4. Dynamically grab the ID from req.params using the paramName
        const passedObjectId = req.params[paramName];

        if (!mongoose.Types.ObjectId.isValid(passedObjectId)) {
            // 5. This will now successfully use the real Express 'next' function
            return throwError(400, "Invalid Todo Id", next);
        }

        // 6. If the ID is valid, call next() to move to your controller
        next();
    };
};
