import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Cache-Control", "no-cache");
  res.write("data: welcome to server sent event\n\n");

  const interval = setInterval(() => {
    res.write(`server time: ${Date.now()}\n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(interval);
  });
});
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
