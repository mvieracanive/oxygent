
import express, { Request } from 'express'

import homeRouter from './routers/home'
import commentRouter from './routers/comment'

import {logger} from './utils/logger'
import { logRequestStart } from './middlewares/log-request-start'
import { getErrorHandler } from './middlewares/error-handler'
import { tracer } from './middlewares/tracer'
import { EnvironmentVariables, getEnvValue } from './utils/environment'
import cors from 'cors'

const app = express()

app.use(tracer())
app.use(logRequestStart(logger))
app.use(cors())
app.use(express.json())
app.use('/', homeRouter)
app.use('/comments', commentRouter)
app.use(getErrorHandler(logger))

app.listen(getEnvValue(EnvironmentVariables.PORT), () => {
    console.log(`Oxigent backend app listening on port ${getEnvValue(EnvironmentVariables.PORT)}`)
})

