declare namespace Express {
    export interface Request {
       tracingId?: string
       query?: {
         where: unknown,
         attributes: string[],
         offset: number
       }
    }
 }