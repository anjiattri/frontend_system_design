const client = require("./client");

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//TODO: to expose rest call
//which internally calls gPRC server function using GRPC client

app.get("/", (req, res) => {
  client.getAll(null, (err, data) => {
    if (!err) res.send(data.customers);
  });
});

app.post("/create", (req, res) => {
  let customer = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };
  client.insert({ customer }, (err, data) => {
    if (!err) res.send(data.customer);
  });
});
app.post("/update", (req, res) => {
  let customer = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };
  client.update({ customer }, (err, data) => {
    if (!err) res.send(data.customer);
  });
});
app.delete("/remove", (req, res) => {
  client.remove({ id: req.body.customerId }, (err, data) => {
    if (!err) res.send(data.customer);
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
