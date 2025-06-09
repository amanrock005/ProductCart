export default function ProductForm({ form, onChange, onSubmit }) {
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        className="p-2 border rounded"
        value={form.name}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        className="p-2 border rounded"
        value={form.category}
        onChange={onChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        className="p-2 border rounded"
        value={form.price}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="p-2 border rounded col-span-full"
        value={form.description}
        onChange={onChange}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded col-span-full hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
}
