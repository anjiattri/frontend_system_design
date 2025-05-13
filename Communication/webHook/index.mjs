import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const payload = req.body;
  console.log("recevied", payload);
  //can put in a queue, maybe do some massaging the data
  res.sendStatus(200).send("successfully send");
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
