import { Request, Response, NextFunction } from 'express'

export default function errorHangling(error, request: Request, response: Response, next: NextFunction){
	console.log('### Error handling ###')
	console.log('   ')
	console.log('   ')

	console.log(error)
	response.sendStatus(500)
	next()
}