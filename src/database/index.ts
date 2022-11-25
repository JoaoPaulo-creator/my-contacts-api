const { Client } = require('pg')
require('dotenv').config()

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PSW

const client = new Client({
	host: 'localhost',
	port: 5432,
	user: dbUser,
	password: dbPassword,
	database: 'mycontacts'
})


export const query = async (query, values) => {
	console.log('Conectado ao banco de dados')
	const { rows }	= await client.query(query, values)
	return rows
}