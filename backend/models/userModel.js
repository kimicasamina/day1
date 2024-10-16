import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  habits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habits",
    },
  ],
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todos",
    },
  ],
  goals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goals",
    },
  ],
});

const User = mongoose.model("Users", userSchema);
export default User;
