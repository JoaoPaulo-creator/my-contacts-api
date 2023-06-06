const { Client } = require("pg");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PSW;

const client = new Client({
	host: "localhost",
	port: 5432,
	user: dbUser,
	password: dbPassword,
	database: "mycontacts",
});

client
	.connect()
	.then(console.log("Conectado ao banco de dados"))
	.catch((error) => console.error(error));

export const query = async (query: any, values: any) => {
	const { rows } = await client.query(query, values);
	return rows;
};
