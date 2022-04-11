const mongoose = require("mongoose");

const hitSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Hit = mongoose.model("Hit", hitSchema);

module.exports = Hit;
