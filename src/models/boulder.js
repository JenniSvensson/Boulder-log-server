const mongoose = require("mongoose");
const { Schema } = mongoose;

const boulderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    attempts: Number,
    grade: String,
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Boulder", boulderSchema);
