import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";

export default function RoomShowcase() {
  const rooms = [
    {
      image: room1,
      title: "Single Sharing",
      desc: "Private room for focused study."
    },
    {
      image: room2,
      title: "Double Sharing",
      desc: "Affordable and comfortable."
    },
    {
      image: room3,
      title: "Triple Sharing",
      desc: "Budget friendly option."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Room Options
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={room.image}
                alt=""
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {room.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {room.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}