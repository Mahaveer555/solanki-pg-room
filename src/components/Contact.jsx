export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-100"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              Address
            </h3>

            <p>
              C-215, Road No.1,
              Indira Colony,
              Vigyan Nagar,
              Kota Rajasthan
            </p>

            <p className="mt-5">
              📞 75689 82194
            </p>

          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              Quick Contact
            </h3>

            <a
              href="https://wa.me/917568982194"
              className="
              block
              bg-green-500
              text-white
              text-center
              py-4
              rounded-xl
              mb-4
              "
            >
              WhatsApp Now
            </a>

            <a
              href="tel:7568982194"
              className="
              block
              bg-blue-600
              text-white
              text-center
              py-4
              rounded-xl
              "
            >
              Call Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}