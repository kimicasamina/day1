import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: { type: String },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tags",
    },
  ],
  startDate: {
    type: Date,
    default: new Date(),
  },
  targetDate: {
    type: Date,
    default: new Date(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  completionRate: {
    type: Number,
    default: 0,
  },
  goals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goals",
    },
  ],
});

// const userModel = userConnection.model('user', userSchema)

const Goal = mongoose.model("Goals", goalSchema);
export default Goal;
