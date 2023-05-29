import express from "express"
import { auth } from "../../middleWare/auth/auth.js"
import { validation } from "../../middleWare/validation/validation.js"
import { taskSchema, updateTaskSchema} from "./task.validation.js"
import * as controller from "./taskController/task.controller.js"

const taskRouter = express.Router()


taskRouter.post("/add",auth,validation(taskSchema),controller.addTodo)
taskRouter.get("/get",auth,controller.getTodo)
taskRouter.put("/updateTodo",auth,validation(updateTaskSchema),controller.updateTodo)
taskRouter.put("/updateStatus",auth,controller.updateTodoStatus)
taskRouter.put("/updateAllTodo",auth,controller.updateAllTodoStatus)
taskRouter.delete("/deleteTodo",auth,controller.deleteTodo)
taskRouter.delete("/deleteAll",auth,controller.deleteAllTodo)
taskRouter.get("/search",auth,controller.search)






export default taskRouter