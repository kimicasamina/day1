import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
  habitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Habit",
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Entry = mongoose.model("Entry", entrySchema);
export default Entry;
