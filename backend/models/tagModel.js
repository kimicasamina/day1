import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

// const userModel = userConnection.model('user', userSchema)

const Tag = mongoose.model("Tags", tagSchema);
export default Tag;
