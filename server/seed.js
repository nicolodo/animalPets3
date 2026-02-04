
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

db.query(
    `INSERT INTO messages (msg_name, content) VALUES ('hello there', 'general kenobi')`
);

db.query(
    `INSERT INTO PETS (name, password, money, intelligence, strength, tea, kindness, animal_id) VALUES ('Biretll', '1234', 0, 1, 1, 1, 1, 'cat')`
)

const response = db.query(
    `SELECT * FROM PETS WHERE animal_id = 'cat'`
)
console.log(response)