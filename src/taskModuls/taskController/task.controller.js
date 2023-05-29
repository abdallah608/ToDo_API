import { taskModel } from "../../../database/models/taskModel/task.Model.js";
import appError from "../../../utilities/error/appError.js";
import catchAsyncError from "../../../utilities/error/catchAsyncError.js";


export const addTodo= catchAsyncError( 
async(req,res,next)=>{
let {title,description,createdBy} =req.body 
let founded = await taskModel.findOne({title})
if(founded){return next(new appError("Existing task",400))}
    let added = await taskModel.insertMany({title,description,createdBy})
    res.status(200).json({message:"task added",added})

})

export const getTodo= catchAsyncError(
async(req,res,next)=>{
    let createdBy=req.header("createdBy")
    let getData = await taskModel.find({createdBy})
    if(!getData){ return next(new appError("no data founded for this id",400))}
        res.status(200).json({message:"succuss",getData})
})

export const updateTodo= catchAsyncError(
async(req,res,next)=>{
    let {description,title ,_id}=req.body
    let updateTask = await taskModel.findByIdAndUpdate({_id},{description,title},{new:true})
    if(updateTask){return next(new appError("not found this id",400)) }
    res.status(200).json({message:"updated",updateTask})
})


export const updateTodoStatus= catchAsyncError(
async(req,res)=>{
    let {status ,_id}=req.body
    let updateTaskStatus = await taskModel.findByIdAndUpdate({_id},{status},{new:true})
    if(!updateTaskStatus){return next(new appError("not found this id",400))}
    res.status(200).json({message:"updated",updateTaskStatus})
})

export const updateAllTodoStatus= catchAsyncError(
async(req,res,next)=>{
    let {status,createdBy}=req.body
    let found = await taskModel.find({createdBy})
     if(!found){return next(new appError("no task to updated",400))} 
    let updateAllTaskStatus= await taskModel.updateOne({status})
    res.json({message:"updated",updateAllTaskStatus})
})

export const deleteTodo= catchAsyncError(
async(req,res,next)=>{
    let{_id}=req.body
    let deleteTask= await taskModel.findByIdAndDelete({_id})
    if(!deleteTask){return next(new appError("not found this id ",400))}
    res.status(200).json({message:"deleted ",deleteTask})
})

export const deleteAllTodo=catchAsyncError(
async(req,res,next)=>{
    let{createdBy}=req.body
    let deleteTask= await taskModel.deleteMany({createdBy})
    if(!deleteTask){return next(new appError("not found this id ",400)) }
    res.status(200).json({message:"deleted ",deleteTask})
})
export const search= catchAsyncError(
async(req,res,next)=>{
    let{title}= req.body
    let search= await taskModel.find({title:{$regex:`${title}`}})
    if(search[0]==null){return next(new appError("notfound",400))}
    res.status(200).json({message:"done",search})
})