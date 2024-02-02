import mongoose from "mongoose";

export async function mongoDbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connected!");
  } catch (err) {
    console.log("Error connecting to mongoDB", err);
  }
}
