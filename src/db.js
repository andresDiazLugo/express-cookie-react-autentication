import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://andresdad5:PzqyWHLSOF7Utv2Y@cluster0.pat3muo.mongodb.net/');
        console.log("database conected")
        
    } catch (error) {
        console.log("error conected",error);
    }
};