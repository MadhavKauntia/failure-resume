import mongoose from "mongoose";

const userModel = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  resume_entries: {
    type: [
      mongoose.Schema({
        id: {
          type: String,
          required: true,
          unique: true,
        },
        date: {
          type: Date,
          required: true,
        },
        failure: {
          type: String,
          required: true,
        },
        lesson: {
          type: String,
          required: true,
        },
      }),
    ],
    default: [],
  },
});

export default mongoose.models.User || mongoose.model("User", userModel);
