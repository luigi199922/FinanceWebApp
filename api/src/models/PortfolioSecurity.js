const mongoose = require("mongoose");

const portfolioSecuritySchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  exchange: {
    type: String,
  },
  amount: {
    type: Number,
  },
  averagePrice: {
    type: Number,
  },
  userPortfolio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Portfolio",
    amount: Number
  }
});
portfolioSecuritySchema.methods.toJSON = function () {
  const security = this;
  const securityObject = security.toObject();
  delete securityObject.userPortfolio;
  return securityObject;
};

const PortfolioSecurity = mongoose.model("PortfolioSecurity", portfolioSecuritySchema);

module.exports = PortfolioSecurity;
