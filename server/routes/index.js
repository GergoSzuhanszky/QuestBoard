import express from "express";
import gameRoutes from "./gameRoute.js";

const router = express.Router();

router.use("/", gameRoutes);
router.use("/games", gameRoutes);
router.use("/games/:gameId", gameRoutes);

export default router;
