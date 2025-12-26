import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

export default function ProductCategory() {
  const { category } = useParams();

  const categoryData = products.find(
    (item) => item.category === category
  );

  if (!categoryData) {
    return <p className="p-10 text-center">Category not found</p>;
  }

  return (<>
  <Navbar />

      <div className='bg-dark'>
        <Breadcrumb />
      </div>
  
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-primaryDark py-5">
        {categoryData.categoryName}
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categoryData.items.map((item) => (
          <Link
            key={item.slug}
            to={`/products/${category}/${item.slug}`}
            className="border rounded-lg p-4 hover:shadow-md hover:shadow-primary transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-center bg-primary/10 py-1 text-primary">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              {item.shortDesc}
            </p>
          </Link>
        ))}
      </div>
    </div>

    <Footer />
 </> );
}
