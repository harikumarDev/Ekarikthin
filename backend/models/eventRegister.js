const mongoose = require("mongoose");

const eventRegSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    category: {
      type: String,
      required: [true, "Event Category is required"],
    },
    event: {
      type: String,
      required: [true, "Event is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    college: String,
    eventCode: {
      type: String,
      required: [true, "Event code is required"],
    },
    tokenId: {
      type: String,
      unique: true,
      required: [true, "Token is required"],
    },
    paid: {
      type: Boolean,
      default: false,
    },
    paymentMode: {
      type: String,
      default: "At venue",
    },
    updatedBy: [
      {
        name: String,
        time: Number,
        _id: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const EventReg = mongoose.model("eventRegistration", eventRegSchema);

module.exports = EventReg;
