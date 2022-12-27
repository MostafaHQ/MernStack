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
    status:{game1:{type:Number},game2:{type:Number},game3:{type:Number}}
  },
  { timestamps: true }
);

module.exports.Player = mongoose.model("Player", PlayerSchema);
