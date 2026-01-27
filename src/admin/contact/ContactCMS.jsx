import { useNavigate } from "react-router-dom";
import AdminAddresses from "./address/AdminAddresses";
import EnquiryList from "./EnquiryList";

export default function ContactCMS() {
  const navigate = useNavigate();

  const contactData = {
    phone: "+91 75758 04585",
    email: "serawater007@gmail.com",
    mapUrl: "https://maps.google.com/...",
  };

  return (
    <div className="max-w-6xl mx-auto p-1 space-y-6">
        <div className="bg-white p-6 rounded shadow space-y-4">
        <EnquiryList />
      </div>

      <div className="flex justify-between flex-col md:flex-row items-start gap-3 md:items-center">
        <h1 className="text-2xl font-bold text-primary">Contact Page Content</h1>
        <button
          onClick={() => navigate("/admin/contact/edit")}
          className="bg-primary text-white px-6 py-2 rounded"
        >
          Edit
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <p><b>Phone:</b> {contactData.phone}</p>
        <p><b>Email:</b> {contactData.email}</p>
        <p><b>Google Map:</b> {contactData.mapUrl}</p>
      </div>

      <AdminAddresses   />
    </div>
  );
}
