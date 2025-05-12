import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

let data = "Initial data";
const waitingClientList = [];
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    //request is hold to the server
    waitingClientList.push(res);
  }
});

app.get("/updateData", (req, res) => {
  data = req.query.data;
  while (waitingClientList.length) {
    const client = waitingClientList.pop();
    client.json({ data });
  }
  res.send({ success: "Data updated!" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
