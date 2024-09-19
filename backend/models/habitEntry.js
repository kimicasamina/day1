import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
  habitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: new Date(),
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Entry = mongoose.model("Entrys", entrySchema);
export default Entry;
