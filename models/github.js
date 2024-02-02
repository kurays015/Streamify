import mongoose, { Schema } from "mongoose";

const githubSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

const githubModel =
  mongoose.models.githubUser || mongoose.model("githubUser", githubSchema);

export default githubModel;
