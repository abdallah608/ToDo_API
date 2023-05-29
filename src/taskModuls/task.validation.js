import joi from "joi"


export const taskSchema = joi.object({
    title: joi.string().min(3).max(20).required(),
    description:joi.string().required(),
    createdBy:joi.string().hex().length(24),
    status:joi.string().min(1).max(1)
})
export const updateTaskSchema = joi.object({
    title: joi.string().min(3).max(20).required(),
    description:joi.string().required(),
    _id:joi.string().hex().length(24),
})
