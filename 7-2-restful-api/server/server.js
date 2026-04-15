import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// import dotenv and load environment variables from .env
dotenv.config();

import { connectDB } from "./db.js";
import { Song } from "./models/song.model.js";

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());              
app.use(express.json());

await connectDB(process.env.MONGO_URL);
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo connected");
  } catch (err) {
    console.error("Connection error:", err.message);
  }
}

connectDB();

// api/songs (Read all songs)



// api/songs (Insert song)

// /api/songs/:id (Update song)


// /api/songs/:id (Delete song)

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));