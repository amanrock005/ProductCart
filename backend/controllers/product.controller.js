// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// function readProductFile() {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);

//   const filePath = path.join(__dirname, "../db/products.json");
//   fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//       console.error(`error occured while reading the file`);
//       return;
//     }
//     try {
//       const parsed = JSON.parse(data);
//       return parsed;
//     } catch (parseErr) {
//       console.error("Error parsing JSON:", parseErr.message);
//       return;
//     }
//   });
// }

// export const allproducts = async (req, res) => {
//   readProductFile();
//   console.log("this is all products");
//   res.status(200).json({ success: true, message: "all products" });
// };

// export const addproduct = async (req, res) => {
//   console.log("add product controller");
//   res.status(200).json({ success: true, message: "add products" });
// };

// export const removeproduct = async (req, res) => {
//   console.log("remove product controller");
//   res.status(200).json({ success: true, message: "remove products" });
// };

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { StatusCodes } from "http-status-codes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../db/products.json");

// Helper to read products
function readProductFile() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading or parsing products file:", err.message);
    return [];
  }
}

// Helper to write products
function writeProductFile(products) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing to products file:", err.message);
  }
}

// GET /products
export const allproducts = async (req, res) => {
  const products = readProductFile();
  res.status(StatusCodes.OK).json({ success: true, products });
};

// POST /products/addproduct
export const addproduct = async (req, res) => {
  const { name, category, price, description } = req.body;

  if (!name || !category || !price || !description) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "All fields (name, category, price, description) are required.",
    });
  }

  const products = readProductFile();
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    category,
    price,
    description,
  };

  products.push(newProduct);
  writeProductFile(products);

  res.status(StatusCodes.CREATED).json({ success: true, product: newProduct });
};

// DELETE /products/removeproduct/:id
export const removeproduct = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Product ID is required to delete a product.",
    });
  }

  const products = readProductFile();
  const index = products.findIndex((p) => p.id === Number(id));

  if (index === -1) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ success: false, message: "Product not found." });
  }

  const removed = products.splice(index, 1);
  writeProductFile(products);

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Product removed successfully.",
    removed,
  });
};
