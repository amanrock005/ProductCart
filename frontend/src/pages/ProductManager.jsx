// import { useState, useEffect } from "react";
// import { axiosInstance } from "../utils/axiosInstance";

// export default function ProductManager() {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     category: "",
//     price: "",
//     description: "",
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await axiosInstance.get("/v1/products");
//       setProducts(res.data.products);
//     } catch (err) {
//       console.error("Error fetching products", err);
//     }
//     setLoading(false);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await axiosInstance.post("/v1/products/addproduct", form);
//       fetchProducts();
//       setForm({ name: "", category: "", price: "", description: "" });
//     } catch (err) {
//       alert("Failed to add product");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axiosInstance.delete(`/v1/products/removeproduct/${id}`);
//       fetchProducts();
//     } catch (err) {
//       alert("Failed to delete product");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4 text-center">Product Manager</h1>

//       <form
//         className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
//         onSubmit={handleAddProduct}
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Product Name"
//           className="p-2 border rounded"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category"
//           className="p-2 border rounded"
//           value={form.category}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           className="p-2 border rounded"
//           value={form.price}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           className="p-2 border rounded col-span-full"
//           value={form.description}
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded col-span-full hover:bg-blue-600"
//         >
//           Add Product
//         </button>
//       </form>

//       <div>
//         {loading ? (
//           <p>Loading products...</p>
//         ) : (
//           <ul className="space-y-4">
//             {products.map((product) => (
//               <li
//                 key={product.id}
//                 className="p-4 border rounded shadow flex justify-between items-center"
//               >
//                 <div>
//                   <h2 className="text-xl font-semibold">{product.name}</h2>
//                   <p className="text-sm text-gray-500">
//                     {product.category} | ₹{product.price}
//                   </p>
//                   <p className="text-gray-700 mt-1">{product.description}</p>
//                 </div>
//                 <button
//                   onClick={() => handleDelete(product.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

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
