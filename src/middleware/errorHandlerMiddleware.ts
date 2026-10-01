import {Request , Response} from express;

interface ExtendedError extends Error {
    statusCode: number;
    errorMessage: any;
}

const globalErrorHandler = (err: ExtendedError, req: Request, res: Response) => {
    
}