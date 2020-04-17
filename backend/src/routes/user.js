const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const userValidation = require("../models/UserValidation");
const auth = require("../middleware/auth")

router.get("/users/me",auth, async (req, res) => {
  const user = User.find({});
  res.send(user);
});

router.post("/users/create", async (req, res) => {
  const error = [];
  userValidation(req.body.email, req.body.password, error);

  try {
    if (error.length > 0) {
      throw new Error();
    }
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(error);
  }
});


module.exports = router;
