import {
  FaWifi,
  FaWater,
  FaParking,
  FaShieldAlt,
  FaBolt,
  FaBook
} from "react-icons/fa";

export default function Facilities() {

  const facilities = [
    { icon: <FaWifi />, name: "High Speed WiFi" },
    { icon: <FaWater />, name: "RO Water" },
    { icon: <FaShieldAlt />, name: "CCTV Security" },
    { icon: <FaBook />, name: "Study Table" },
    { icon: <FaBolt />, name: "Power Backup" },
    { icon: <FaParking />, name: "Parking Facility" },
  ];

  return (
    <section
      id="facilities"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          Facilities
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

          {facilities.map((item, index) => (
            <div
              key={index}
              className="
              bg-gray-50
              rounded-2xl
              p-8
              shadow-lg
              text-center
              hover:scale-105
              transition
              "
            >
              <div className="text-4xl mb-4 flex justify-center text-blue-600">
                {item.icon}
              </div>

              <h3 className="font-semibold">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}