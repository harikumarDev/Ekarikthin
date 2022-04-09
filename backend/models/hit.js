const mongoose = require("mongoose");

const hitSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Hit = mongoose.model("Hit", hitSchema);

module.exports = Hit;
