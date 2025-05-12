import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

let data = "Initial data";

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/getData", (req, res) => {
  res.send({ data });
});

app.get("/updateData", (req, res) => {
  data = "Updated data";
  res.send({ data });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
