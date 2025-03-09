import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  university: { type: String, required: true },
  category: { type: String, required: true },
  totalRuns: { type: Number, required: true },
  ballsFaced: { type: Number, required: true },
  inningsPlayed: { type: Number, required: true },
  wickets: { type: Number, required: true },
  oversBowled: { type: Number, required: true },
  runsConceded: { type: Number, required: true },
  isNewPlayer: { type: Boolean, default: true },
});

export default mongoose.model("Player", playerSchema);
