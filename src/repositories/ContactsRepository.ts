import { query } from '../database'


class ContactsRepository {

	async create({ name, email, phone, category_id }){

		// utilizando das binginds do PG para evitar ataques de SQL Injection
		// Com a declaração RETURNING, será possível retornar uma ou todas as colunas alteradas no insert de dados

		const [row] = await query(
			`INSERT INTO contacts(name, email, phone, category_id)
		 	VALUES($1, $2, $3, $4)
			RETURNING *
			`
			, [name, email, phone, category_id]
			)
			return row
	}

	update(id, { name, email, phone, category_id }){

	}


	findAll(){
	}

	findBydId(id: string){

	}

	findByEmail(email: string){

	}

	delete(id: string){

	}

}


export default new ContactsRepository()