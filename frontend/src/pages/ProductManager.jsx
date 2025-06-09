import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import ProductForm from "../components/ProductForm";
import ProductItem from "../components/ProductItem";

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/v1/products");
      setProducts(res.data.products);
    } catch (err) {
      console.error("Error fetching products", err);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/v1/products/addproduct", form);
      fetchProducts();
      setForm({ name: "", category: "", price: "", description: "" });
    } catch (err) {
      alert("Failed to add product");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/v1/products/removeproduct/${id}`);
      fetchProducts();
    } catch (err) {
      alert("Failed to delete product");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Product Manager</h1>

      <ProductForm
        form={form}
        onChange={handleChange}
        onSubmit={handleAddProduct}
      />

      <div>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <ul className="space-y-4">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
