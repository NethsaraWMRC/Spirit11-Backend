import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    budget: { type: Number, default: 9000000 },
    team: [
      {
        player: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
        price: { type: Number, required: true },
      },
    ],
    refreshToken: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
