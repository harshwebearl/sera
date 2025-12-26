import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

export default function ProductDetails() {
  const { category, slug } = useParams();

  const categoryData = products.find(
    (cat) => cat.category === category
  );

  if (!categoryData) {
    return <p className="p-10">Category not found</p>;
  }

  const product = categoryData.items.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  return (<>
  <Navbar />
  
        <div className='bg-dark'>
          <Breadcrumb />
        </div>
    <div className="max-w-7xl mx-auto p-6 my-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-[400px] object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4 text-primaryDark">{product.name}</h1>
          <p className="mb-6 text-gray-700">{product.description}</p>

          <h3 className="font-semibold mb-2 text-primaryDark">Applications</h3>
          <ul className="list-disc ml-6 mb-6">
            {product.applications.map((app, i) => (
              <li key={i}>{app}</li>
            ))}
          </ul>

          <h3 className="font-semibold mb-2 text-primaryDark">Key Features</h3>
          <ul className="list-disc ml-6">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <Footer />
  </>);
}
