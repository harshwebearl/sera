import { Link } from "react-router-dom";
import { products } from "../../data/products";

export default function Products() {
  return (
    <section className="max-w-7xl mx-auto md:p-6 space-y-10">

      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 justify-between">
  <h1 className="text-2xl font-bold text-primaryDark">All Products</h1>

      <Link
  to="/admin/products/add"
  className="bg-primary text-white px-5 py-2 rounded"
>
  + Add Product
</Link>
      </div>

    


      {products.map((category) => (
        <div key={category.category} className="space-y-4">

          {/* CATEGORY TITLE */}
          <h2 className="text-xl font-semibold text-primary border-b pb-2">
            {category.categoryName}
          </h2>

          {/* PRODUCTS GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.items.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-xl shadow hover:shadow-xl transition p-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 mx-auto object-contain mb-4"
                />

                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.shortDesc}
                </p>

                <div className="flex gap-2">
                  <Link
                    to={`/admin/products/${category.category}/${item.slug}`}
                    className="px-3 py-1.5 text-sm border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
                  >
                    View
                  </Link>

                  <Link
                    to={`/admin/products/edit/${category.category}/${item.slug}`}
                    className="px-3 py-1.5 text-sm border border-primaryDark text-primaryDark rounded hover:bg-primaryDark hover:text-white transition"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}

    </section>
  );
}
