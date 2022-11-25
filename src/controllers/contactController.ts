import { request, Request, response, Response } from "express";
import ContactsRepository from "../repositories/ContactsRepository";



class ContactController {

	async index(request: Request, response: Response){
		const contacts = await ContactsRepository.findAll()
		return response.json(contacts)
	}

	async	show(request: Request, response: Response){
		const { id } = request.params
		const contact = await ContactsRepository.findBydId(id)

		if(!contact){
			return response.status(404).json({ error: 'Contact not found'})
		}

		return response.status(200).json(contact)

	}

	async store(){
		// usado para criar um registro
	}

	async update(){
		// autoexplicativo
	}

	async delete(request: Request, response: Response){
		const { id } = request.params
		const contact = await ContactsRepository.findBydId(id)

		if(!contact){
			return response.status(404).json({ error: 'Contact not found'})
		}

		await ContactsRepository.delete(id)
		return response.sendStatus(204)

	}

}

export default new ContactController()
