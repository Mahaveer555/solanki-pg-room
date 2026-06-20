export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Solanki PG Room
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#facilities">Facilities</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="tel:7568982194"
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
        >
          Call Now
        </a>

      </div>
    </nav>
  )
}