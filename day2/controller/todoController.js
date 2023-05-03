const fs = require("fs");
const path = require("path");
const todoFile = path.join(__dirname, "..", "data", "todo.json");
const todos = fs.readFileSync(todoFile, "utf-8", (err) => {
  if (err) return alert("unable to read file");
});
if (!todos) {
  fs.writeFileSync(todoFile, JSON.stringify([]));
}
const parsedTodo = JSON.parse(todos);
exports.checkTodoId = (req, res, next) => {
  const todoId = req.params.id;
  const todo = parsedTodo.find((todo) => todo.id === todoId * 1);
  if (!todo) {
    return res.status(404).json({
      status: "Failed",
      message: "todo not found",
    });
  }
  next();
};
exports.getTodos = (req, res, next) => {
  return res.status(200).json({
    status: "success",
    results: parsedTodo.length,
    data: {
      todos: parsedTodo,
    },
  });
};

exports.getTodo = (req, res, next) => {
  const id = req.params.id;
  const todo = parsedTodo.find((todo) => todo.id === id * 1);
  res.status(200).json({
    status: "success",
    data: {
      todo: todo,
    },
  });
};
exports.createTodo = (req, res, next) => {
  const newId = parsedTodo.length + 1;
  const todo = {
    id: newId,
    title: req.body.title,
    completed: req.body.completed,
  };
  parsedTodo.push(todo);
  fs.writeFileSync(todoFile, JSON.stringify(parsedTodo, null, 2));
  res.status(201).json({
    status: "success",
    data: {
      todo,
    },
  });
};
exports.updateTodo = (req, res, next) => {
  const todoId = req.params.id;
  const title = req.body.title;
  const completed = req.body.completed;
  if (!title) {
    return res.status(400).json({
      status: "failed",
      message: "Please provide title to update the title",
    });
  }
  //const todo = parsedTodo.find((todo) => todo.id === todoId * 1);
  // const updatedTodo = {
  //   ...todo,
  //   title: title,
  //   completed: completed ?? "false",
  // };
  const updatedTodo = parsedTodo.map((todo, i) => {
    if (todo.id === todoId * 1) {
      console.log("sed");
      return { ...todo, title: title, completed: completed ?? false };
    } else {
      return todo;
    }
  });
  fs.writeFileSync(todoFile, JSON.stringify(updatedTodo));
  res.status(200).json({
    status: "success",
    data: {
      todo: updatedTodo,
    },
  });
};
exports.deleteTodo = (req, res, next) => {
  const todoId = req.params.id;
  const todo = parsedTodo.filter((todo) => todo.id != todoId * 1);
  console.log(todo);
  fs.writeFileSync(todoFile, JSON.stringify(todo, null, 2));
  res.status(204).json({
    status: "success",
    data: null,
  });
};
