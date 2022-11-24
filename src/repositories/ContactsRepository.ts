import { uuid } from 'uuidv4'

const contacts = [{
	id: uuid(),
	name: 'Joao'	,
	email: 'joao@teste.com',
	phone: '12312312312',
	category_id: uuid(),
}]

class ContactRepository {

	findAll(){
		return new Promise((resolve) =>  {
			resolve(contacts)
		})
	}
}


export default new ContactRepository()