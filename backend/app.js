import express from "express";
import data from "./data";
import dotenv from "dotenv";
import config from "./config";
import mongoose, { mongo } from "mongoose";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const mongodburl = config.MONGODB_URL;
mongoose
  .connect(mongodburl, {
    useNewUrlParser: true, // avoid warnings in console
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();

app.use("/api/users", userRoutes);

app.get("/api/products/:id", (req, res, next) => {
  const productId = Number(req.params.id);
  const product = data.products.find((product) => product._id === productId);
  if (product) res.send(product);
  else res.status(404).send({ msg: "Sorry, but you are Lost!" });
});

app.get("/api/products", (req, res, next) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening at port" + port);
});
