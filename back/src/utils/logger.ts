import winston from 'winston'

export class Logger {
    logger = winston.createLogger({
        level: 'info',
        format: winston.format.simple(),
        defaultMeta: {service: 'oxygent back-end'},
        exitOnError: false,
        transports: [            
            new winston.transports.Console()
        ]
    })

    info(reqId: string, message: string){
        this.logger.log({
            level: 'info',
            message: `[request id]: ${reqId} ${message}`
        })
    }

    error(reqId: string, message: string){
        this.logger.log({
            level: 'info',
            message: `[request id]: ${reqId} ${message}`
        })
    }
}

export const logger = new Logger()
