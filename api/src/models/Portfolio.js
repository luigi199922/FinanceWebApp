const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  equity: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  securities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Security" }],
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
