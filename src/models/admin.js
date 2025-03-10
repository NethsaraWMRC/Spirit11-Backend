import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    refreshToken: { type: String },
    role: { type: String, default: "admin" },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
