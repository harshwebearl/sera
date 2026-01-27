import EnquiryList from "../contact/EnquiryList";

export default function Dashboard() {
  const cards = [
    { title: "Products", value: 4 },
    { title: "Gallery Images", value: 28 },
    { title: "Testimonials", value: 6 },
    { title: "Enquiries", value: 15 },
  ];

  return (
    <>
      <h2 className="text-2xl font-heading text-primaryDark font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h4 className="text-textGray font-bold text-sm">{card.title}</h4>
            <p className="text-3xl font-bold text-primary mt-2">
              {card.value}
            </p>
          </div>
        ))}
      </div>

       <EnquiryList />
    </>
  );
}
