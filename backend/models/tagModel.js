import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// const userModel = userConnection.model('user', userSchema)

const Tag = mongoose.model("Tags", tagSchema);
export default Tag;
