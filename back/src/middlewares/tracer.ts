import { ExpressMiddleware } from "../types/express-middleware"
import { v4 as uuidv4 } from 'uuid';

let tracingId = uuidv4()

export function tracer():ExpressMiddleware{
    return (req, res, next)=>{
          req.tracingId = tracingId
          tracingId = uuidv4()
        next()
    }
}
