import mongoose from "mongoose";

const taskSchema= new mongoose.Schema({
    title:String,
    description:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    status:{
        type:String,
        enums:["completed","pending"],
        default:"pending"
    }
},{
    timestamps:true
})

export const taskModel= mongoose.model("task",taskSchema)
