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

class ContactRepository {

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

	delete(id: string){
		return new Promise<void>((resolve) => {
			contacts = contacts.filter((contact) => contact.id !== id)
			resolve()
		})
	}

}


export default new ContactRepository()