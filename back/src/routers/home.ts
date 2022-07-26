import express from 'express'

const router = express.Router()

router.use((req, res, next) => {
  
  next()
})

router.get('/', (req, res) => {
  res.send('Oxigent backend API')
})

export default router