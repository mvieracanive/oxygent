import { NextFunction, Request, Response } from "express";

export interface ExpressMiddleware {
    (req: Request, res: Response, next: NextFunction): void 
}

export interface ExpressMiddlewareError {
    (err: any, req: Request, res: Response, next: NextFunction): void 
}
