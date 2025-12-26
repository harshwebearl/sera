import { Link } from "react-router-dom";

const galleryData = [
  {
    id: 1,
    title: "ETP Plant Installation",
    image: "/images/products/air-blower.png",
  },
  {
    id: 2,
    title: "Sludge Dewatering System",
    image: "/images/products/sludge-dewatering.png",
  },
  {
    id: 3,
    title: "Industrial Blower Setup",
    image: "/images/products/acoustic-hoods.png",
  },
];

export default function GalleryList() {
  return (
    <div className="max-w-7xl mx-auto md:p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primaryDark">Gallery</h1>
        <Link
          to="/admin/gallerylist/add"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
        >
          + Add Image
        </Link>
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-contain rounded-t-lg"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>

              <div className="flex gap-3 mt-3">

                <button className="text-sm px-4 py-1 border border-red-500 text-red-500 hover:bg-red-500  hover:text-white transition rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
