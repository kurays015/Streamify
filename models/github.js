import { mongoDbConnection } from "@/app/lib/mongoose";
import mongoose, { Schema } from "mongoose";

mongoDbConnection();
mongoose.Promise = global.Promise;

const githubSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const githubModel =
  mongoose.models.githubUser || mongoose.model("githubUser", githubSchema);

export default githubModel;
