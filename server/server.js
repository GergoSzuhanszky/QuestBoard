import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, "swagger.yaml"));

app.use(cors({ origin: "http://localhost:3000" })); // Allow React frontend
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express server!");
});

dotenv.config();
await connectDB();

const PORT = process.env.PORT || 5000;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
