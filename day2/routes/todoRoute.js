const express = require("express");
//controller
const todoController = require("../controller/todoController");
//router is mini application it's can be independent from main router
const router = express.Router();

router.route("/").get(todoController.getTodos).post(todoController.createTodo);
router
  .route("/:id")
  .get(todoController.checkTodoId, todoController.getTodo)
  .patch(todoController.checkTodoId, todoController.updateTodo)
  .delete(todoController.checkTodoId, todoController.deleteTodo);
// router.get("/", (req, res) => {
//   // to get the query parameter req.query.queryparametername e.g. /user?name="dinesh"
//   //so it will print dinesh;
//   console.log(req.query.name);
//   res.send("User list");
// });
// router.get("/new", (req, res) => {
//   res.send("user new form");
// });
// router.get("/:id", (req, res) => {
//   //to access params req.params.paramname is used
//   res.send(`Get user with id ${req.params.id}`);
// });
// router
//   .route("/:id")
//   .get((req, res) => {
//     res.send(`Get user with id ${req.params.id}`);
//   })
//   .post((req, res) => {
//     `Get user with id ${req.params.id}`;
//   })
//   .delete((req, res) => {
//     `Get user with id ${req.params.id}`;
//   });
// const users = [{ name: "Dip" }, { name: "Sad" }];
// router.param("id", (req, res, next, id) => {
//   req.user = users[id];
//   next();
// });
module.exports = router;
