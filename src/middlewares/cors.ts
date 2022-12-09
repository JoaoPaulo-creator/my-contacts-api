import { Request, Response, NextFunction } from 'express'

export default function corsMiddleware(request: Request, response: Response, next: NextFunction): void {
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
	next()
}