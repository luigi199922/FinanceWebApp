const express = require("express");
const router = new express.Router();
const WatchList = require("../models/Security");
const auth = require("../middleware/auth")

router.get("/watchlist/:id",auth, async (req, res) => {
  const _id = req.params.id;
  try {
    //const WatchList = await WatchList.findById(id);
    const WatchList = await WatchList.findOne({ _id, owner: req.user._id})
    if (!WatchList) {
      return res.status(404).send();
    }
    res.status(200).send(WatchList);
  } catch (err) {
    res.status(500).send();
  }
});

router.patch("/watchlist/:id",auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid updates" });
  }
  try {
    const WatchList = await WatchList.findOne({_id: req.params.id, owner: req.user._id})
    
    await WatchList.save()
    // const WatchList = await WatchList.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!WatchList) {
      return res.status(404).send();
    }
    updates.forEach((update) => WatchList[update] = req.body[update])
    await WatchList.save()
    res.status(200).send(WatchList);
  } catch (error) {
    res.status(400).send();
  }
});

router.post("/watchlist",auth, async (req, res) => {
//  const WatchList = new WatchList(req.body);
  const watchlist = new WatchList({
    ...req.body,
    owner : req.user._id
  })
  try {
    watchlist.save();
    res.status(201).send(watchlist);
  } catch (err) {
    res.status(500).send();
  }
});


router.delete("/watchlist/:id",auth, async (req, res) => {
  try {
    const WatchList = await WatchList.findOneAndDelete({_id: req.params.id, owner: req.user._id});
    if (!WatchList) {
      return res.status(404).send();
    }
    res.status(200).send(WatchList);
  } catch (e) {
    res.status(500).send();
  }
});
module.exports = router;
