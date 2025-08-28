import Game from "../models/Game.js";

export const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
};

export const createGame = async (req, res) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ error: "Failed to create game" });
  }
};

export const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.gameId);
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch game" });
  }
};

export const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.gameId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: "Failed to update game" });
  }
};

export const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.gameId);
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    res.json({ message: "Game deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete game" });
  }
};
