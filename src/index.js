import express from "express";
import cors from "cors";

const DEFAULT_PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/posts", null);
app.post("/posts", null);

app.listen(DEFAULT_PORT, () => {
  console.log(`Server running on port ${DEFAULT_PORT}`);
});
