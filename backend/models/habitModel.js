import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: { type: String },
  category: {
    type: String,
    enum: ["None", "Health", "Productivity", "Career", "Productivity"],
    required: true,
    default: "None",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
