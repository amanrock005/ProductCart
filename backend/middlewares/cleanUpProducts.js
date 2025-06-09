// middlewares/clearOnExit.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const productFilePath = path.join(__dirname, "../db/products.json");

function clearProductFile() {
  try {
    fs.writeFileSync(productFilePath, "[]", "utf-8");
    console.log("Cleared products.json on shutdown.");
  } catch (err) {
    console.error("Failed to clear products file:", err.message);
  }
}

export function registerShutdownCleanup() {
  const cleanup = () => {
    clearProductFile();
    process.exit();
  };

  process.on("SIGINT", cleanup); // Ctrl + C
  process.on("SIGTERM", cleanup); // External kill
}
