// handling errors
process.on("uncaughtException",(err,req,res,next)=>{
    console.log(err);
})
// .env
import * as dotenv from 'dotenv'
dotenv.config()
// imports
import express from 'express'
import globalError from './utilities/error/globalError.js'
import { userRoute } from './src/user/user.routers.js';
import taskRouter from './src/taskModuls/task.router.js';
import appError from './utilities/error/appError.js';
import { connection } from './database/connection/connection.js';
// server express
const app = express()
const port = process.env.port || 8000
// express middleware
app.use(express.json())
app.use(express.static("uploads"))


// server mongoDB
connection()
// routing
app.use('/user',userRoute)
app.use('/todo',taskRouter)

// routing server express
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// handling errors
app.all("*",(req,res,next)=>{
    next(new appError(`Invalid Url ${req.originalUrl}`,404))
   })
   process.on("unhandledRejection",(err,req,res,next)=>{
       next(err)
   
   })
   app.use(globalError)
