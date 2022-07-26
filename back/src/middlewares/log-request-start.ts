import { Logger } from "../utils/logger"
import { ExpressMiddleware } from "../types/express-middleware"

export function logRequestStart(logger: Logger):ExpressMiddleware{
    return (req, res, next)=>{
        logger.info(req.tracingId ?? 'undefined', `START [url]: ${req.url}`)
        next()
    }
}