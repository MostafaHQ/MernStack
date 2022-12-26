const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least three characters"],
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      minlength: [3, "Position must be at least three characters"],
    },
  },
  { timestamps: true }
);

module.exports.Player = mongoose.model("Player", PlayerSchema);
