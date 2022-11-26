import { Request, Response } from 'express'
import CategoriesRepository from '../repositories/CategoriesRepository'

class CategoryController {

	async index(request: Request, response: Response){
		const { orderBy } = request.query
		const categories = await CategoriesRepository.findAll(orderBy)
		return response.status(200).json(categories)
	}

	async show(request: Request, response: Response){
		const { id } = request.params
		const category = await CategoriesRepository.findById(id)

		if(!category){
			return response.status(404).json({ error: 'Category not found'})
		}

		return response.status(200).json(category)

	}

	async store(request: Request, response: Response){
		const { name } = request.body
		const nameExists = await CategoriesRepository.findByName(name)

		if(!name){
			return response.status(400).json({ error: 'Category name is required'})
		}

		if(nameExists){
			return response.status(400).json({ error: 'Category name already exists'})
		}

		const category = await CategoriesRepository.create({ name })
		return response.status(201).json(category)
	}

	async update(request: Request, response: Response){
		const { id } = request.params
		const { name } = request.body

		const categoryExists = await CategoriesRepository.findById(id)

		if(!categoryExists){
			return response.status(404).json({ error: 'Category not found'})
		}

		if(!name){
			return response.status(400).json({ error: 'Category name is required'})
		}



		const category = await CategoriesRepository.update(id, { name })
		return response.json(category)
	}

	async delete(request: Request, response: Response){
		const { id } = request.params
		await CategoriesRepository.delete(id)
		return response.sendStatus(204)
	}

}


export default new CategoryController()