import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/products";

export default function AdminProductDetails() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const navigate = useNavigate();

  if (!product) return <p className="p-10">Product not found</p>;


  return (
    <section className="relative max-w-6xl mx-auto md:p-6 flex items-start md:items-center gap-3 flex-col md:flex-row">
      <img src={product.image} className="w-full max-h-[400px] object-contain" />

      <div>
      <h1 className="text-3xl font-bold mt-6 text-primaryDark">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>


      <h3 className="mt-6 font-semibold text-primaryDark">Applications</h3>
      <ul className="list-disc ml-6">
        {product.applications.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
      
      </div>

      <div className="absolute right-2 top-2">
        <button
                    onClick={() => navigate("/admin/productslist")}
                    className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
                >
                    Back
                </button>
      </div>
    </section>
  );
}
