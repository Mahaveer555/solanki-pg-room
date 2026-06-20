import { FaWifi, FaShieldAlt, FaBook, FaHome } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaHome />,
      title: "Comfortable Living",
      desc: "Feel like home with clean and spacious rooms.",
    },
    {
      icon: <FaBook />,
      title: "Study Environment",
      desc: "Peaceful atmosphere for focused studies.",
    },
    {
      icon: <FaWifi />,
      title: "Fast WiFi",
      desc: "High-speed internet available 24/7.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Secure",
      desc: "CCTV surveillance and secure premises.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Solanki PG?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl text-center"
            >
              <div className="text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}