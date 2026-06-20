import { useEffect, useState } from "react";

// यह एक छोटा सा कस्टम कंपोनेंट है जो नंबर को एनिमेट करेगा
function AnimatedNumber({ endValue, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue);
    if (start === end) return;

    // हर फ्रेम का टाइम कैलकुलेट करने के लिए
    let totalMilisecondsStep = Math.max(Math.floor(duration / end), 1);
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, totalMilisecondsStep);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return <>{count}</>;
}

export default function Stats() {
  const stats = [
    { number: 500, suffix: "+", text: "Students Hosted" },
    { number: 24, suffix: "/7", text: "Support Available" },
    { number: 100, suffix: "%", text: "Safe Environment" },
    { number: 5, suffix: "★", text: "Rating" },
  ];

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-bold text-yellow-400">
                {/* अब हम बाहरी लाइब्रेरी की जगह अपना खुद का एनिमेटेड कंपोनेंट यूज़ कर रहे हैं */}
                <AnimatedNumber endValue={item.number} />
                {item.suffix}
              </h3>
              <p className="mt-3 text-gray-300">{item.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}