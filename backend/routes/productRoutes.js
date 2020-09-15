import express from "express";
import Product from "../models/productModel";
import { isAuth, isAdmin } from "../utils/util";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const product = Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "product not found" });
  }
});

router.post("/", isAuth, isAdmin, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    // if newProduct is successfully created
    return res
      .status(201)
      .send({ msg: "New Product Created", data: newProduct });
  }
  return res.status(500).send({ msg: "Error in creating the product" });
});

router.put("/:id", isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId); // this is similar to - Product.find({_id : productId})
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    product.rating = req.body.rating;
    product.numReviews = req.body.numReviews;
  }
  const updatedProduct = await product.save();
  if (updatedProduct) {
    // if updatedProduct is successfully saved.
    return res.status(200).send({ msg: "Product Updated", data: newProduct });
  }
  return res.status(500).send({ msg: "Error in updating the product" });
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const deltedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: "product deleted" });
  } else {
    res.status(401).send("Error in Deletion");
  }
});

export default router;
