import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Solanki PG Room
            </h2>

            <p className="text-gray-300">
              Comfortable and affordable PG
              accommodation in Vigyan Nagar,
              Kota.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact
            </h3>

            <p className="flex items-center gap-2">
              <FaPhone />
              75689 82194
            </p>

            <p className="flex items-center gap-2 mt-3">
              <FaWhatsapp />
              WhatsApp Support
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Address
            </h3>

            <p className="flex gap-2">
              <FaMapMarkerAlt />
              C-215, Road No.1,
              Vigyan Nagar,
              Kota Rajasthan
            </p>
          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 Solanki PG Room. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}