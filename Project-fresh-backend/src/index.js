import dotenv from "dotenv";
import connectDB from "./db/index.js";  

// Configuring dotenv to provide env_variables as soon as app loads.

dotenv.config({
    path:'./env'
})

// This is the function to connect app with MONGODB...exported from './db'

connectDB()