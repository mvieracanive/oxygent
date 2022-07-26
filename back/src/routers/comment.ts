import express from 'express'
import { checkSchema, validationResult } from 'express-validator'
import { getQueryParser } from '../middlewares/query-parser'
import { ReqCommentSchema, DuplicatedCommentSchema } from '../schemas/comment'
import { commentService } from '../services/comment'
import { logger } from '../utils/logger'

const router = express.Router()

router.use((req, res, next) => {  
  next()
})

router.get('/', getQueryParser(), async (req, res) => {
  const comments = await commentService.find(req.query)
  res.send(comments)
})

router.post('/', 
  checkSchema(ReqCommentSchema), 
  checkSchema(DuplicatedCommentSchema),
  async (req, res) => {
  try{
    validationResult(req).throw()
    const newComment = await commentService.create(req.body)
    res.send(newComment)
  }
  catch(e){
    logger.error(req.tracingId, "Error de validación")
    res.status(400).send('Bad Request')
  }  
})

router.patch('/:id', (req, res) => {
    res.send('Partially updated a comments')
})

router.delete('/:id', async (req, res) => {
    await commentService.delete(+req.params.id)
    res.send(`ID: ${req.params.id}, successfuly deleted`)
})

export default router