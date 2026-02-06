import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const myServer = express();
myServer.use(express.json());
myServer.use(express.text());
myServer.use(cors());
dotenv.config();
console.log(process.env.DB_CONN_STRING);

// connect my server to my database (supabase)
const db = new pg.Pool({
  // connectionString: process.env.DB_KEY,
  connectionString: process.env.DB_CONN_STRING,
  ssl: { rejectUnauthorized: false },
});

// Set up a route handler between my server and database.
myServer.get("/reviews", async (request, response) => {
  const dbPull = await db.query(`SELECT * FROM reviews`);
  response.json(dbPull.rows);
});

// set up the ears of the server
myServer.listen(4242, () => {
  console.log(`Started listening for requests made to http://localhost:4242`);
});

// Set up a route handler -> tell the server what to actually do when it hears a GET request comes through port 4242 (from the client) /
myServer.get(`/`, (request, response) => {
  response.send(`Get Request Received. This is myServer's Root Get Response`);
});

myServer.post("/reviews", (request, response) => {
  const clientGame = request.body.game;
  const clientReview = request.body.review;

  const data = db.query(`INSERT INTO reviews (game, review) VALUES ($1, $2)`, [
    clientGame,
    clientReview,
  ]);
});

//Oleksii lines
myServer.get("/check-pet", async (request, response) => {
  const petName = request.query.name;

  // Length check
  if (!petName || petName.trim().length < 1) {
    return response.status(400).json({
      exists: false,
      error: "The pet's name must be at least 1 character long.",
    });
  }

  try {
    const result = await db.query("SELECT * FROM pets WHERE name = $1", [
      petName.trim(),
    ]);

    if (result.rows.length > 0) {
      response.json({
        exists: true,
        pet: result.rows[0],
      });
    } else {
      response.json({ exists: false });
    }
    //res.json({ exists: result.rows.length > 0 });
  } catch (err) {
    console.error("DB ERROR:", err);
    response.status(500).json({ exists: false });
  }
});
