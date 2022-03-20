const mongoose = require("mongoose");

const organiserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    event: {
      type: String,
      required: [true, "Event is required"],
    },
    instaLink: {
      type: String,
      required: [true, "Instagram link is required"],
    },
    fbLink: {
      type: String,
      required: [true, "Facebook link is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Organiser = mongoose.model("Organiser", organiserSchema);

module.exports = Organiser;
