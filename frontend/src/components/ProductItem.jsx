export default function ProductItem({ product, onDelete }) {
  return (
    <li className="p-4 border rounded shadow flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">
          {product.category} | ₹{product.price}
        </p>
        <p className="text-gray-700 mt-1">{product.description}</p>
      </div>
      <button
        onClick={() => onDelete(product.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
}
