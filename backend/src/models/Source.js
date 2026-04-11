import mongoose from "mongoose";

const SourceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model("Source", SourceSchema);
