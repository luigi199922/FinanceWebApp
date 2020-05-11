const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../../src/models/User")
const Portfolio = require("../../src/models/Portfolio")
const Security = require("../../src/models/Security")

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  username: "Mike",
  email: "mike@example.com",
  password: "welcometothethunderdome",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

const securityOneId = new mongoose.Types.ObjectId();
const securityOne = {
  _id: securityOneId,
  symbol: "AAPL",
  userPortfolio: [
    userOneId
  ]
}

const userOnePortfolioId = new mongoose.Types.ObjectId();
const userOnePortfolio = {
  _id: userOnePortfolioId,
  equity: 1000000,
  owner: userOneId,
  securities: [securityOneId]
}

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  username: "Stan",
  email: "stan@example.com",
  password: "letmein123456",
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
    },
  ],
};

const setupDatabase = async () => {
    await User.deleteMany()
    await Portfolio.deleteMany()
    await Security.deleteMany()
    await new Security(securityOne).save()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Portfolio(userOnePortfolio).save()

}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    setupDatabase,
    
}