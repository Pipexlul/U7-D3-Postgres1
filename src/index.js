import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import pg from "pg";
const { Pool } = pg;

import dbPoolConfig from "./config/dbPoolConfig.js";

import { recreateDb } from "./utils/recreateDatabase.js";

const args = process.argv.slice(2);

const main = async () => {
  let dbPool;

  if (
    !args.some(
      (arg) =>
        arg.toLowerCase() === "-s" || arg.toLowerCase() === "--skip-recreate"
    )
  ) {
    const rootPool = new Pool({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: "postgres",
    });

    try {
      dbPool = await recreateDb(rootPool);
    } catch (err) {
      console.error(err);
    } finally {
      rootPool.end();
    }
  } else {
    dbPool = new Pool(dbPoolConfig());
  }

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
