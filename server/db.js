import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config();
let host = process.env.DB_HOST;
let user = process.env.DB_USER;
let password = process.env.DB_PASSWORD;
let database = process.env.DB_SCHEMA;

export const db = mysql.createConnection({
  host,
  user,
  password,
  database,
});
