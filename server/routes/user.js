import express from "express";
import pg from "pg";

const router = express.Router();
const { Pool } = pg;

const pool = new Pool({
  user: "user",
  host: "postgres",
  database: "meetsafe",
  password: "password",
  port: 5432,
});

router.post("/store", async (req, res) => {
  const { name, picture, email, gender, address, birthdate, nationality, phone_number } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO users (full_name, picture, email_address, gender, address, birthdate, nationality, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT (email_address) DO NOTHING",
      [name, picture, email, gender, JSON.stringify(address), birthdate, nationality, phone_number]
    );
    client.release();
    res.status(200).send("User info stored successfully");
  } catch (error) {
    console.error("Error storing user info:", error);
    res.status(500).send("Error storing user info");
  }
});

export default router;
