import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.route.js";
import { registerShutdownCleanup } from "./middlewares/cleanUpProducts.js";

const app = express();
const PORT = 3000;

registerShutdownCleanup();

app.use(express.json());
app.use(cors());

app.use("/api/v1/products", productRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
