export default function Products() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-heading font-bold">Products</h2>
        <button className="bg-primary px-4 py-2 rounded text-dark font-semibold">
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-4">Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4">Blowers</td>
              <td className="text-green-600">Active</td>
              <td className="flex gap-3 p-4">
                <button className="text-blue-500">Edit</button>
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
