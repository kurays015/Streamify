import mongoose, { Schema } from "mongoose";

const providersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

const providersModel =
  mongoose.models.ProvidersUser ||
  mongoose.model("ProvidersUser", providersSchema);

export default providersModel;
