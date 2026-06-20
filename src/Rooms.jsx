export default function Rooms() {
  return (
    <section
      id="rooms"
      className="bg-gray-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Room Options
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Single Sharing
            </h3>
            <p className="mt-4">
              Private Room with Study Space
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Double Sharing
            </h3>
            <p className="mt-4">
              Comfortable and Affordable
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Triple Sharing
            </h3>
            <p className="mt-4">
              Budget Friendly Option
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}