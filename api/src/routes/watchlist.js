const express = require("express");
const router = new express.Router();
const WatchList = require("../models/WatchList");
const auth = require("../middleware/auth")

//GET /watchlist?completed=false
//GET /watchlist?limit=10&skip=0
//GET /watchlist?sortBy=createdAt_desc
router.get("/watchlist",auth, async (req, res) => {
  const match = {}
  const sort = {}

  if(req.query.completed){
    match.completed = req.query.completed === 'true'
  }
  if(req.query.sortBy){
    const parts = req.query.sortBy.split("-")
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
  }

  try {
    await req.user.populate({
      path: 'WatchLists',
      match,
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
        sort
      }
    }).execPopulate()
    res.send(req.user.WatchLists);
  } catch (err) {
    res.status(500);
  }
});

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
