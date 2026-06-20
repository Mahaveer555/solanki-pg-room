import building from "./assets/buildingg.jpg"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
    >

      <img
        src={building}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">

        <h1 className="text-5xl md:text-7xl font-bold">
          Solanki PG Room Kota
        </h1>

        <p className="mt-6 text-xl max-w-2xl">
          Affordable, Safe and Comfortable
          Accommodation for Students.
        </p>

        <div className="mt-8 flex gap-4">

          <a
            href="tel:7568982194"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917568982194"
            className="bg-green-500 px-6 py-3 rounded-lg"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  )
}