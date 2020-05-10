const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const Security = require("../models/Security");
const Portfolio = require("../models/Portfolio");
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
    const portfolio = new Portfolio({
      owner: user._id,
    });
    user.portfolio = [portfolio._id]
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

router.patch("/watchlist", auth, async (req, res) => {
  try {
    const security = await Security.findOne({ symbol: req.body.symbol });
    if (!security) {
      const newSecurity = new Security({
        ...req.body,
        userWatchList: [req.user],
      });
      req.user.watchList.push(newSecurity._id);
      await req.user.save();
      await newSecurity.save();
      return res.send(newSecurity);
    }
    if (req.user.watchList.includes(security._id)) {
      return res.send("Security is already in your watch list");
    }
    req.user.watchList.push(security._id);
    security.userWatchList.push(req.user._id);
    await security.save();
    await req.user.save();
    res.send(security);
  } catch (err) {
    res.status(400).send();
  }
});

router.delete("/watchlist", auth, async (req, res) => {
  try {
    const security = await Security.findOne({ symbol: req.body.symbol });
    const errorMessage = "The requested Security is not in your watchlist";
    if (!security) return res.send(errorMessage);
    if (!req.user.watchList.includes(security._id))
      return res.send(errorMessage);
    const index = req.user.watchList.indexOf(security._id);
    const secIndex = security.userWatchList.indexOf(req.user_id);
    req.user.watchList.splice(index, 1);
    security.userWatchList.splice(secIndex, 1);
    await security.save();
    await req.user.save();
    res.send(security);
  } catch (err) {
    res.status(400);
  }
});

router.get("/watchlist", auth, async (req, res) => {
  try {
    await req.user
      .populate({
        path: "watchList",
      })
      .execPopulate();
    res.send(req.user.watchList);
  } catch (err) {
    res.status(500);
  }
});

router.get("/portfolio", auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ owner: req.user._id });
    if (!portfolio) {
      const newPortfolio = new Portfolio({
        owner: req.user._id,
      });
      return res.send(newPortfolio);
    }
    await portfolio
      .populate({
        path: "securities",
      })
      .execPopulate();

    res.send(portfolio);
  } catch (err) {
    res.status(500);
  }
});

router.patch("/portfolio", auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ owner: req.user._id });
    const security = await Security.findOne({ symbol: req.body.symbol });
    let securityId;
    if (!portfolio) {
      if (!security) {
        const newSecurity = new Security({
          ...req.body,
          userPortfolio: [req.user],
        });
        securityId = newSecurity._id;
      } else {
        securityId = security._id;
      }
      const newPortfolio = new Portfolio({
        owner: req.user._id,
        securities: [securityId],
      });
      req.user.portfolio.push(securityId);
      await req.user.save();
      await newPortfolio.save();
      return res.send(newPortfolio);
    }

    if (req.user.portfolio.includes(securityId)) {
      return res.send("Security is already in your Portfolio");
    }
    req.user.portfolio.push(securityId);
    security.userPortfolio.push(req.user._id);
    await security.save();
    await req.user.save();
    res.send(security);
  } catch (err) {
    res.status(400).send();
  }
});

router.delete("/portfolio", auth, async (req, res) => {
  try {
    const security = await Security.findOne({ symbol: req.body.symbol });
    const errorMessage = "The requested Security is not in your portfolio";
    if (!security) return res.send(errorMessage);
    console.log(req.user);
    console.log(security._id);
    if (!req.user.portfolio.includes(security._id))
      return res.send(errorMessage);
    const index = req.user.portfolio.indexOf(security._id);
    const secIndex = security.userPortfolio.indexOf(req.user_id);
    req.user.watchList.splice(index, 1);
    security.userWatchList.splice(secIndex, 1);
    await security.save();
    await req.user.save();
    res.send(security);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;
