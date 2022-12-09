import express from 'express'
import router from './routes'
import 'express-async-errors'
import corsMiddleware from '../src/middlewares/cors'
import errorHangling from './middlewares/errorHandling'

const app = express()
const cors = corsMiddleware
const error = errorHangling


app.use(express.json())
app.use(cors)
app.use(router)
app.use(error)


app.listen(3001, () =>{
    console.log('Server running at: http://localhost:3001')
})