const facilities = [
  "High Speed WiFi",
  "RO Water",
  "Laundry",
  "CCTV Security",
  "Study Table",
  "Power Backup",
  "Parking",
  "Hot Water"
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Facilities
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {facilities.map((item) => (
            <div
              key={item}
              className="shadow-lg p-6 rounded-xl text-center bg-white"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}