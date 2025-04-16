import mongoose from "mongoose";


export const connectMongoDB = async (): Promise<void> => {
    try{
        const uri = process.env.MONGODB_URI;
        if(!uri){
            throw new Error("MONGODB_URI is not defined in environment variables.");
        }


        await mongoose.connect(uri);
        console.log("Connected to connectMongoDB");
    } catch (error)  {
        console.log("Error connecting to MongoDB:", (error as Error).message);
    }
}