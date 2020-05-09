const mongoose = require("mongoose");

const securitySchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  exchange: {
    type: String,
  },
  userWatchList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  userPortfolio: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    amount: Number
  }]
});
securitySchema.methods.toJSON = function () {
  const security = this;
  const securityObject = security.toObject();
  delete securityObject.userWatchList;
  return securityObject;
};

const Security = mongoose.model("Security", securitySchema);

module.exports = Security;
