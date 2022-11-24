import { Request, Response } from "express";

class ContactController {

	async index(request: Request, respose: Response){
		// método usado para listar todos os contatos
		return respose.json('Ola, mundo')
	}

	async	show(){
		// usado para obter apenas um registro
	}

	async store(){
		// usado para criar um registro
	}

	async update(){
		// autoexplicativo
	}

	async delete(){
		// deleta um registro
	}

}

export default new ContactController()
