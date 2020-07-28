import express from "express";
import User from "../models/userModel";
import { getToken } from "../utils/util";

const router = express.Router();

router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
    });
  } else {
    res.status(401).send({ msg: "invalid user data" });
  }
});

router.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ msg: "invalid Email or Password." });
  }
});

router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Lalit",
      email: "lalitnegi1997@gmail.com",
      password: "12345",
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (err) {
    res.send({ msg: err.message });
  }
});

export default router;
