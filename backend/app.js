import express from "express";
import data from "./data";

const app = express();

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
