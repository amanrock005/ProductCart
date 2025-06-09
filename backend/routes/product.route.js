import express from "express";
import {
  addproduct,
  allproducts,
  removeproduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", allproducts);
router.post("/addproduct", addproduct);
router.delete("/removeproduct/:id", removeproduct);

export default router;
