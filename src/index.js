import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const main = async () => {
  const portNum = parseInt(process.env.TEST_PORT);
  const DEFAULT_PORT = portNum || 3000;

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/posts", (req, res) => {
    res.send("Hello World!");
  });
  app.post("/posts", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(DEFAULT_PORT, () => {
    console.log(`Server running on port ${DEFAULT_PORT}`);
  });
};

main();
