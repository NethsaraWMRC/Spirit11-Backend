import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

//routes
import authRoutes from "./routes/authRoutes.js";
import playerRoutes from "./routes/playerRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import leaderboard from "./routes/leaderboardRoutes.js";
import tournamentRoutes from "./routes/tournamentRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;

app.use("/api/auth", authRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/leaderboard", leaderboard);
app.use("/api/tournament", tournamentRoutes);

connection.once("open", () => {
  console.log("MongoDB connection successful!");
});

app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
