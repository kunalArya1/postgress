import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  connectionString: process.env.POSTGRESS_URL,
});

async function createUserTable() {
  await client.connect();
  const result = await client.query(`
  CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
  `);
  console.log(result);
}

async function insertInUserTable() {
  await client.connect();
  const result = await client.query(`
    INSERT INTO users (username, email, password) VALUES ('JayPrakash Kumar', 'jay@gmail.com', 'jay@123');
    `);
  console.log(result);
}
// createUserTable();
insertInUserTable();
