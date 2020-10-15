import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
    createdBoulders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Boulder",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
