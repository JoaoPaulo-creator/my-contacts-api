import { v4 } from 'uuid'

let contacts = [
	{
		id: v4(),
		name: 'Joao'	,
		email: 'joao@teste.com',
		phone: '12312312312',
		category_id: v4(),
	},
	{
		id: v4(),
		name: 'Zé'	,
		email: 'zZe@teste.com',
		phone: '7685678567',
		category_id: v4(),
	}
]

class ContactsRepository {


	create({ name, email, phone, category_id }){
		return new Promise((resolve) => {
			const newContact = {
				id: v4(),
				name,
				email,
				phone,
				category_id
			}

			contacts.push(newContact)
			resolve(newContact)
		})
	}

	update(id, { name, email, phone, category_id }){
		return new Promise((resolve) => {
			const updatedContact = {
				id,
				name,
				email,
				phone,
				category_id
			}

			contacts.map((contact) => {
				contact.id === id ? updatedContact : contact
			})

			resolve(updatedContact)
		})
	}


	findAll(){
		return new Promise((resolve) =>  {
			resolve(contacts)
		})
	}

	findBydId(id: string){
		return new Promise((resolve) => {
			resolve(
				contacts.find((contact) => contact.id === id)
				)
		})
	}

	findByEmail(email: string){
		return new Promise((resolve) => {
			resolve(
				contacts.find((contact) => contact.email === email)
				)
		})
	}

	delete(id: string){
		return new Promise<void>((resolve) => {
			contacts = contacts.filter((contact) => contact.id !== id)
			resolve()
		})
	}

}


export default new ContactsRepository()