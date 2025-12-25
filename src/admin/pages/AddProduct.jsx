export default function AddProduct() {
  return (
    <>
      <h2 className="text-2xl font-heading font-bold mb-6">
        Add Product
      </h2>

      <form className="bg-white p-8 rounded-xl shadow-sm space-y-5 max-w-3xl">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          placeholder="Short Description"
          rows="3"
          className="w-full border px-4 py-2 rounded"
        />

        <input type="file" />

        <button className="bg-primary px-6 py-3 rounded font-semibold">
          Save Product
        </button>
      </form>
    </>
  );
}
