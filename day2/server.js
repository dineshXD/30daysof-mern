const path = require("path");
const express = require("express");
const app = express();
//will follow mvc architecture
const todoRouter = require("./routes/todoRoute");

//to render static files normally used for images etc.
//app.use(express.static(path.join(__dirname, "public")));

//to render views from ejs files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//middleware basically everything in express is middleware
//middleware runs from top to bottom so order matters for middleware
//to set for particular request only then add the middleware after route
//e.g. app.get("/",middleware,function);
app.use(logger);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

//basic routing
//to render html file res.render() method is used it will render from views folder by default
//but it will not render simply html file (static files can be rendered) for dynamic files
//we need to use template engine
app.get("/", (req, res, next) => {
  res.status(200).render("index", { text: "hello world" });
});
//by default express does not allow to access body so we need to use middleware to parse body
//or another middleware is app.use(express.urlencoded({extended:true})) both can be used
//but express.json() is used most of time it used to parse json data also
app.use(express.json());
app.post("/", (req, res, next) => {
  console.log(req.body.firstName);
  res.send("hi");
});
app.use("/api/v1/todos", todoRouter);

app.listen(3000);
