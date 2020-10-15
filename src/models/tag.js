const mongoose = require("mongoose");
const { Schema } = mongoose;

const tagSchema = new Schema(
  {
    title: String,
    boulders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Boulder",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tag", tagSchema);
