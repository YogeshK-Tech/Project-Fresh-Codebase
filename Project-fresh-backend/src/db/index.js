import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;

        const connectionInstance = await mongoose.connect(uri);

        console.log(`MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("MongoDB disconnected!");
    } catch (error) {
        console.error("Error disconnecting from MongoDB:", error);
        process.exit(1);
    }
};

export { disconnectDB, connectDB };
