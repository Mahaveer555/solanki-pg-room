import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "Best PG in Kota. Clean rooms, good facilities and peaceful environment.",
    },
    {
      name: "Aman Verma",
      review:
        "Affordable rent and very supportive management. Highly recommended.",
    },
    {
      name: "Rohit Singh",
      review:
        "Great location near coaching institutes. WiFi speed is excellent.",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          Student Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="flex gap-1 text-yellow-500 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600">
                "{item.review}"
              </p>

              <h4 className="mt-5 font-bold text-lg">
                {item.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}