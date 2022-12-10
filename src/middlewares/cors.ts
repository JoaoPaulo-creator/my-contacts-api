import { Request, Response, NextFunction } from 'express'

export default function corsMiddleware(request: Request, response: Response, next: NextFunction): void {
	response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
	response.setHeader('Access-Control-Allow-Methods', '*')
	response.setHeader('Access-Control-Allow-Headers', '*')

	/*
	Nota sobre o header abaixo:

	Ele é utiliado para armezenar em cache as requisições realizadas. O valor informado é em segundos, sendo um tempo diferente
	para navegadores diferentes. O Chrome após v76, por exemplo, tem um tempo máximo de cache de 7200 segudos, enquanto que o firefox
	tem o tempo máximo de 86400.

	Porém, ainda se pode passar o valor -1, o que vai instruir o navegador a não guardar em cache as requisições do pre-flight.

	Preflight: Requisições HTTP que sejam contenham tanto os verbos GET, POST e HEADER, quanto DELETE, PATCH, etc, além de ter
	content types a mais do Simple Request.
	*/

	response.setHeader('Access-Control-Max-Age', '10')
	next()
}