import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: { type: String },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tags  ",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  entries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Entry",
    },
  ],
});

// const userModel = userConnection.model('user', userSchema)

const Habit = mongoose.model("Habits", habitSchema);
export default Habit;
