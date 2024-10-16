import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: new Date(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
});

// const userModel = userConnection.model('user', userSchema)

const Todo = mongoose.model("Todos", todoSchema);
export default Todo;
