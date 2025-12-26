import { Link } from "react-router-dom";
import { products } from "../../data/products";

export default function Products() {
  return (
    <section className="max-w-7xl mx-auto md:p-6 space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primaryDark">Our Products</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition p-6"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 mx-auto object-contain mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.shortDesc}</p>

            <Link
              to={`/admin/products/${item.slug}`}
              className="inline-block px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >
              View Details
            </Link>

            <Link
              to={`/admin/products/edit/${item.slug}`}
              className="inline-block px-4 py-2 ml-2 border border-primaryDark text-primaryDark  rounded hover:bg-primaryDark hover:text-white transition"
            >
             Edit
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
