import { type NextFunction, type Request, type Response } from "express";

export const notFoundHandler = 
    (req: Request, res: Response, next:NextFunction) =>{
        res.status(404).json({
            error: "Not Found",
            message: `The Requested Url ${req.originalUrl} was not found on this server.`
        })
    }
