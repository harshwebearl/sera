import { useNavigate, useParams, Link } from "react-router-dom";
import { products } from "../../data/products";

export default function AdminProductDetails() {
  const { category, slug } = useParams();
  const navigate = useNavigate();

  const categoryData = products.find((cat) => cat.category === category);
  if (!categoryData) return <p className="p-10">Category not found</p>;

  const product = categoryData.items.find((item) => item.slug === slug);
  if (!product) return <p className="p-10">Product not found</p>;

    const videoId = product.videoUrl.split("youtu.be/")[1].split("?")[0];

  return (<div className="relative max-w-6xl mx-auto md:p-6">
    <section className=" flex flex-col md:flex-row gap-10">
      <div>

      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 max-h-[400px] object-contain"
      />
      {/* ACTION BUTTONS */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => navigate("/admin/productslist")}
            className="px-5 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Back
          </button>

          <Link
            to={`/admin/products/edit/${category}/${product.slug}`}
            className="px-5 py-2 bg-primary text-white rounded hover:bg-primaryDark"
          >
            Edit Product
          </Link>
        </div>
        </div>

      {/* DETAILS */}
      <div className="flex-1">
        
        <h1 className="text-3xl font-bold text-primaryDark">{product.name}</h1>
        <p className="text-gray-600 mt-3">{product.description}</p>

        <h3 className="mt-6 font-semibold text-primaryDark">Applications</h3>
        <ul className="list-disc ml-6">
          {product.applications.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>

        <h3 className="mt-4 font-semibold text-primaryDark">Key Features</h3>
        <ul className="list-disc ml-6">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

         

        
      </div>
      
    </section>
  {product.videoUrl && (
          <div className="grid md:grid-cols-2 gap-10 mt-20">

            {/* VIDEO PREVIEW */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primaryDark">
                Product Video
              </h2>

              <div
                className="relative cursor-pointer group aspect-video rounded-lg overflow-hidden shadow"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={product.name}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>

              </div>
            </div>

            {/* BROCHURE */}
            {product.brochure && (
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4 text-primaryDark">
                  Download Brochure
                </h2>

                <p className="text-gray-600 mb-6">
                  Download complete technical specifications of {product.name}.
                </p>

                <a
                  href={product.brochure}
                  download
                  className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryDark transition w-fit"
                >
                  Download PDF
                </a>
              </div>
            )}
          </div>
        )}
    </div>
  );
}
