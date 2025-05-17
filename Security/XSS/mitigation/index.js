const express = require("express");
const app = express();
const PORT = 3010;

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;" +
      "img-src https://images.unsplash.com;"
  );
  next();
});
//expose static files
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(3000, () => {
  console.log(`erver is running on port http://localhost:${PORT}`);
});
