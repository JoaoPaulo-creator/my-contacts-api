import { Request, Response } from "express";
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

	async store(request: Request, response: Response){
		const { name, email, phone, category_id } = request.body

		const contactExists = await ContactsRepository.findByEmail(email)


		if(!name){
			return response.status(400).json({ error: 'Name is required'})
		}


		if(contactExists){
			return response.status(400).json({ error: 'Contact already exists'})
		}

		const contact = await ContactsRepository.create({ name, email, phone, category_id })


		return response.status(201).json(contact)
	}


	async update(request: Request, response: Response){
		const { id } = request.params
		const { name, email, phone, category_id } = request.body

		const contactExists = await ContactsRepository.findBydId(id)


		if(!name){
			return response.status(400).json({ error: 'Name is required'})
		}

		if(!contactExists){
			return response.status(404).json({ error: 'Contact not found'})
		}

		/*

		Essa condicional vai valiar se o email existe
		e também vai verificar se id encontrado é diferente do id que queremos editar

		 */
		const emailExists = await ContactsRepository.findByEmail(email)
		if(emailExists && email.id !== id){
			return response.status(400).json({ error: 'Contact already exists'})
		}

		const contact = await ContactsRepository.update(id, {
			name, email, phone, category_id
		})

		return response.json(contact)

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
