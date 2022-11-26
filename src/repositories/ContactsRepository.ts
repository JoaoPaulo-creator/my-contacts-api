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


	async	findAll(){
		const rows = await query('select * from contacts', '')
		return rows
	}

	async findBydId(id: string){
		const [row] = await query(`select * from contacts WHERE id = $1`, [id])
		return row

	}

	async findByEmail(email: string){
		const [row] = await query(`select * from contacts WHERE email = $1`, [email])
		return row
	}

	async delete(id: string){
		const [row] = await query(`DELETE FROM contacts WHERE id = $1`, [id])
		return row

	}

}


export default new ContactsRepository()