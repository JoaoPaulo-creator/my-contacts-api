import express from 'express'
import router from './routes'
import 'express-async-errors'

const app = express()

app.use(express.json())
app.use(router)

app.use((error, request, response, next) => {
	console.log('### Error handling ###')
	console.log('   ')
	console.log('   ')

	console.log(error)
	response.sendStatus(500)
	next()
})


app.listen(3001, () =>{
    console.log('Server running at: http://localhost:3001')
})