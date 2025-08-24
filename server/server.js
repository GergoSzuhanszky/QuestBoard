require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, "swagger.yaml"));

app.use(cors({ origin: "http://localhost:3000" })); // Allow React frontend
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express server!");
});

const PORT = process.env.PORT || 5000;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
