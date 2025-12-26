import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTestimonial() {
  const navigate = useNavigate();

  const [testimonial, setTestimonial] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(testimonial);
    alert("Testimonial added successfully");
    navigate("/admin/testimonials");
  };

  return (
    <div className="max-w-3xl mx-auto md:p-6">
      <h1 className="text-2xl font-bold mb-6 text-primaryDark">Add Testimonial</h1>

      <form className="bg-white p-6 rounded-xl shadow space-y-4">
        <div>
          <label className="block font-medium mb-1">Client Name</label>
          <input
            type="text"
            className="w-full border px-4 py-2 rounded border-primaryDark/30"
            value={testimonial.name}
            onChange={(e) =>
              setTestimonial({ ...testimonial, name: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Testimonial</label>
          <textarea
            rows="4"
            className="w-full border px-4 py-2 rounded border-primaryDark/30"
            value={testimonial.message}
            onChange={(e) =>
              setTestimonial({ ...testimonial, message: e.target.value })
            }
          />
        </div>

        

         <div className="flex gap-4">
         <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
        >
          Save Testimonial
        </button>

          <button
            type="button"
            onClick={() => navigate("/admin/testimonialscms")}
            className="border px-6 py-2 rounded hover:bg-primaryDark hover:text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
