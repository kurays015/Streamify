import { mongoDbConnection } from "@/app/lib/mongoose";
import mongoose, { Schema } from "mongoose";

mongoDbConnection();
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
