import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.all("/", (req, res) => {
  console.log("req", req, "res", res);
  res.send("Hello World");
});

const todo = [
  {
    id: 1,
    title: "todo1",
    description: "description1",
  },
  {
    id: 2,
    title: "todo2",
    description: "description2",
  },
];
//READ
app.get("/todos", (req, res) => {
  res.json(todo);
});

//CREATE
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todo.push(newTodo);
  res.status(201).json({ message: "new todo added" });
});

//UPDATE
app.put("/todos/:id", (req, res) => {
  const newTodo = req.body;
  const data = todo.find((todo) => todo.id == req.params.id);
  data.title = newTodo.title;
  data.description = newTodo.description;
  res.json({ message: "todo updated" });
});

app.delete("/todos/:id", (req, res) => {
  const data = todo.find((todo) => todo.id == req.params.id);
  todo.splice(todo.indexOf(data), 1);
  res.json({ message: "todo deleted" });
});
//DELETE
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
