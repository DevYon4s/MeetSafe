import pg from "pg";
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER || "user",
  host: process.env.DB_HOST || "postgres",
  database: process.env.DB_NAME || "meetsafe",
  password: process.env.DB_PASSWORD || "password",
  port: process.env.DB_PORT || 5432,
});

export default pool;
