import { Request, Response } from "express";
import ContactsRepository from "../repositories/ContactsRepository";
import isValidUUID from "../utils/is-valid-uuid";

class ContactController {
	async index(request: Request, response: Response) {
		// aplicando uma query
		const { orderBy } = request.query;
		const contacts = await ContactsRepository.findAll(orderBy);

		return response.status(200).json(contacts);
	}

	async show(request: Request, response: Response) {
		const { id } = request.params;

		if (!isValidUUID(id)) {
			return response.status(400).json({ error: "Contact not found" });
		}

		const contact = await ContactsRepository.findBydId(id);

		if (!contact) {
			return response.status(404).json({ error: "Contact not found" });
		}

		return response.status(200).json(contact);
	}

	async store(request: Request, response: Response) {
		const { name, email, phone, category_id } = request.body;

		if (!name) {
			return response.status(400).json({ error: "Name is required" });
		}

		if (category_id && !isValidUUID(category_id)) {
			return response.status(400).json({ error: "Provide a valid category" });
		}

		if (email) {
			const emailExists = await ContactsRepository.findByEmail(email);
			if (emailExists) {
				return response.status(400).json({ error: "Email is already in use" });
			}
		}

		const contact = await ContactsRepository.create({
			name,
			email: email || null,
			phone,
			category_id: category_id || null,
		});
		return response.status(201).json(contact);
	}

	async update(request: Request, response: Response) {
		const { id } = request.params;
		const { name, email, phone, category_id } = request.body;

		if (!isValidUUID(id)) {
			return response.status(400).json({ error: "Contact not found" });
		}

		if (category_id && !isValidUUID(category_id)) {
			return response.status(400).json({ error: "Provide a valid category" });
		}

		if (!name) {
			return response.status(400).json({ error: "Name is required" });
		}

		const contactExists = await ContactsRepository.findBydId(id);
		if (!contactExists) {
			return response.status(404).json({ error: "Contact not found" });
		}

		/*
		Essa condicional vai validar se o email existe
		e também vai verificar se id encontrado é diferente do id que queremos editar
		*/
		if (email) {
			const emailAlreadyExists = await ContactsRepository.findByEmail(email);
			if (emailAlreadyExists && emailAlreadyExists.id !== id) {
				return response.status(400).json({ error: "Contact already exists" });
			}
		}

		const contact = await ContactsRepository.update(id, {
			name,
			email: email || null,
			phone,
			category_id: category_id || null,
		});

		return response.json(contact);
	}

	async delete(request: Request, response: Response) {
		const { id } = request.params;

		if (!isValidUUID(id)) {
			return response.status(400).json({ error: "Contact not found" });
		}

		await ContactsRepository.delete(id);
		return response.sendStatus(204);
	}
}

export default new ContactController();
