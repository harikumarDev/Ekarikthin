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
  },
  {
    timestamps: true,
  }
);

const Organiser = mongoose.model("Organiser", organiserSchema);

module.exports = Organiser;
