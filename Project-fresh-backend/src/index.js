import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Configuring dotenv to provide env_variables as soon as app loads.

dotenv.config({
    path:'./env'
})

// This is the function to connect app with MONGODB...exported from './db'

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR:",error)
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed !!!",error)
})