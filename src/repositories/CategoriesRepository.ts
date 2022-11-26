import { query } from '../database'

class CategoriesRepository{

	async findAll(orderBy: any = 'ASC'){
		const ordenation = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
		const rows = await query(`
		SELECT * FROM categories ORDER BY NAME ${ordenation};`
		, '')
		return rows
	}

	async findByName(name: string ){
		const [row] = await query('SELECT * FROM categories WHERE name = $1;', [name])
		return row
	}

	async findById(id: string){
		const [row] = await query('SELECT * FROM categories WHERE id = $1;', [id])
		return row
	}

	async create({ name }){
		const [row] = await query(`
		INSERT INTO categories(name)
		VALUES($1)
		RETURNING *;
		`, [name])
		return row
	}

	async update(id: string, { name }){
		const [row] = await query(`
		UPDATE categories
		SET name = $1
		WHERE id = $2
		RETURNING *;
		`, [name, id])

		return row
	}

	async delete(id: string){
		const deleteOps = await query('DELETE FROM categories WHERE id = $1', [id])
		return deleteOps
	}

}

export default new CategoriesRepository()