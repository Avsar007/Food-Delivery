import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://avsarkalola21:Avsar%23007@cluster0.deap5.mongodb.net/?retryWrites=true&w=majority&appName=Food-del').then(()=>console.log("DB Connected"));
}
