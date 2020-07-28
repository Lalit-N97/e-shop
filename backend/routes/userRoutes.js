import express from "express";
import User from "../models/userModel";

const router = express.Router();

router.post("/signin", (req, res) => {
  const signinUser = User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(user),
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
    res.send(user);
  } catch (err) {
    res.send({ msg: error.message });
  }
});

export default router;
