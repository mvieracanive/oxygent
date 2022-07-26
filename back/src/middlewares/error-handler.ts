import { Logger } from "../utils/logger"
import { ExpressMiddlewareError } from "../types/express-middleware"

export function getErrorHandler(logger: Logger):ExpressMiddlewareError{
    return (error, req, res, next)=>{
        logger.error(req.tracingId ?? 'undefined', `ERROR [request id]: ${req.tracingId}`)
        console.log(error)
        res.status(500)
        res.send('Internal server error')
    }
}