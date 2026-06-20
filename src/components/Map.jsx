export default function Map() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Our Location
        </h2>

        <iframe
          title="Solanki PG Room Location"
          src="https://maps.google.com/maps?q=vigyan%20nagar%20kota&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[500px] rounded-xl shadow-lg"
        />

      </div>

    </section>
  );
}