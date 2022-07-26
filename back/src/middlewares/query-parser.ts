import { ExpressMiddleware } from "../types/express-middleware"
import { sequelize } from "../db/models"

export function getQueryParser():ExpressMiddleware{
    return async (req, res, next)=>{
        const queryParserSq =  require("sequelize-query")(sequelize)        
        let query = await queryParserSq.parse(req)
        req.query = query
        next()
    }
}