import { Request, Response } from "express";
import ContactsRepository from "../repositories/ContactsRepository";



class ContactController {

	async index(request: Request, respose: Response){
		const contacts = await ContactsRepository.findAll()
		return respose.json(contacts)
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
