import express from "express";
import {
  getGames,
  createGame,
  getGameById,
  updateGame,
  deleteGame,
} from "../controllers/gameController.js";

const gameRouter = express.Router();

gameRouter.get("/", (req, res) => {
  res.redirect("/games");
});
gameRouter.get("/games", getGames);
gameRouter.post("/games", createGame);
gameRouter.get("/games/:gameId", getGameById);
gameRouter.put("/games/:gameId", updateGame);
gameRouter.delete("/games/:gameId", deleteGame);

export default gameRouter;
