import { useState } from "react";

export default function BookingForm() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const message = `Hello Solanki PG Room,

Name: ${name}
Phone: ${phone}

I want information about room availability.`;

    window.open(
      `https://wa.me/917568982194?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <section className="py-24 bg-blue-600">

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-5xl text-white text-center font-bold mb-10">
          Book Your Room
        </h2>

        <form
          onSubmit={submitForm}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-4 rounded mb-4"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button
            className="
            w-full
            bg-green-500
            text-white
            py-4
            rounded-xl
            font-bold
            "
          >
            Send on WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}