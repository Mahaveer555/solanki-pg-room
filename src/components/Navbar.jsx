import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md text-white">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Solanki PG Room
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#home">Home</a>
          <a href="#facilities">Facilities</a>
          <a href="#rooms">Rooms</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="tel:7568982194"
          className="hidden md:block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold"
        >
          Call Now
        </a>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-800 p-4 flex flex-col gap-4">
          <a href="#home">Home</a>
          <a href="#facilities">Facilities</a>
          <a href="#rooms">Rooms</a>
          <a href="#contact">Contact</a>
        </div>
      )}

    </nav>
  );
}