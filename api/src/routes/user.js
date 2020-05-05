const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");
const multer = require("multer");
const sharp = require("sharp");

router.get("/me", auth, async (req, res) => {
  //Get User Profile
  const user = await User.findOne({ _id: req.user._id });
  res.send(user);
});

router.post("/create", async (req, res) => {
  //Create a User
  const user = new User(req.body);
  const error = user.validateSync();
  try {
    const token = await user.generateAuthToken();
    await user.save();
    res.status(201).send({ user, token });
  } catch (e) {
    let errorMessage = "A user with that email is already registered";
    if (error) {
      const errors = Object.values(error.errors);
      errorMessage = errors[0].message;
    }
    res.status(400).send(errorMessage);
  }
});

router.post("/login", async (req, res) => {
  //Login User
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send("Unable to Log in with the Provided Credentials");
  }
});

router.post("/logout", auth, async (req, res) => {
  //Logout User
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();

    res.status(200).send("Logged out Successfully");
  } catch (E) {
    res.status(500).send();
  }
});

router.post("/logoutAll", auth, async (req, res) => {
  //Logout all Accounts
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send("Logged out Successfully");
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["username", "email", "password", "name"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation)
    return res.status(400).send({ error: "invalid updates" });

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.status(200).send(req.user);
  } catch (e) {
    res.status(400).send(error.errors);
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.user._id });
    res.send("User Deleted Successfully");
  } catch (e) {
    res.status(400).send();
  }
});

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("File Must be JPG JPEG PNG"), true);
    }
    cb(undefined, true);
  },
});

router.post(
  "/me/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    req.user.avatar = buffer;
    // req.user.avatar = req.file.buffer
    await req.user.save();
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.delete(
  "/me/avatar",
  auth,
  async (req, res) => {
    req.user.avatar = undefined;
    await req.user.save();
    res.status(200).send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.get("/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) {
      throw new Error();
    }
    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;
