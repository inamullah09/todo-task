import express from "express";
import { getTodos, addTodo, completeTodo,getCompleted } from "../Controllers/Controller.js";
const TodoRouter = express.Router();
const CompleteRouter = express.Router();
const AddRouter = express.Router();

TodoRouter.get("/", getTodos);

CompleteRouter.post("/", completeTodo);
CompleteRouter.get("/", getCompleted);

AddRouter.post("/", addTodo);



export { TodoRouter, CompleteRouter, AddRouter };
