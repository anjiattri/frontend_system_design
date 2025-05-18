const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const redirectToHttps = (req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
};
app.use(redirectToHttps);
app.use((req, res, next) => {
  res.setHeader("Referrer-Policy", "no-referrer");
  res.removeHeader("X-Powered-By");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );

  next();
});

app.get("/list", (req, res) => {
  res.send([
    {
      id: "1",
      title: "hello world!",
    },
  ]);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
