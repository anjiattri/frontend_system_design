import express from "express";
import path from "path";
import { createServer } from "node:http";
import { join } from "node:path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = 3000;
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("connection established");

  //event name is chat message
  socket.on("chat message", (msg) => {
    console.log("server", msg);
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
