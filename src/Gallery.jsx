import room1 from "./assets/room1.jpg"
import room2 from "./assets/room2.jpg"
import room3 from "./assets/room3.jpg"
import room4 from "./assets/room4.jpg"

export default function Gallery() {
  const images = [room1, room2, room3, room4]

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          PG Gallery
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt="PG Room"
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}