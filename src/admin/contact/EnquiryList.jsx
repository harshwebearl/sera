import { FaTrash } from "react-icons/fa";

export default function EnquiryList() {
  const enquiries = [
    { id: 1, name: "Raj Patel", email: "raj@gmail.com", phone: "9999999999", message: "Need ETP" },
    { id: 2, name: "Amit Shah", email: "amit@gmail.com", phone: "8888888888", message: "Need STP" },
  ];

  return (
    <div className="mx-auto ">
      <h1 className="text-2xl font-bold mb-6 text-primary">Enquiries</h1>

      {/* Scroll Wrapper */}
      <div className=" overflow-x-auto">
        <table className=" w-full text-sm bg-white rounded shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 whitespace-nowrap">Name</th>
              <th className="p-3 whitespace-nowrap">Email</th>
              <th className="p-3 whitespace-nowrap">Phone</th>
              <th className="p-3">Message</th>
              <th className="p-3 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => (
              <tr key={e.id} className="border-t">
                <td className="p-3 whitespace-nowrap">{e.name}</td>
                <td className="p-3 whitespace-nowrap">{e.email}</td>
                <td className="p-3 whitespace-nowrap">{e.phone}</td>
                <td className="p-3">{e.message}</td>
                <td className="p-3">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
