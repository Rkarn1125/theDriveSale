import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      
    },
    Description: {
      type: String,
    },
    Priority: {
      type: String,
      default: false
    },
    status: {
      type: String,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const dataModel = mongoose.model("data1", dataSchema);

export default dataModel;
