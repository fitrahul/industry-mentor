const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send({ user });
  } catch (err) {
    return res.status(400);
  }
});

router.post("/login", async (req, res) => {
  const users = await User.findOne({email: req.body.email}).lean().exec();
  console.log(req.body);
  return res.status(200).send({ users });
});

module.exports = router;
