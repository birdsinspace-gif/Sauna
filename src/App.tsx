import "./index.css";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">

      {/* HERO */}
      <section
        className="h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/sauna-hero.jpg')" }}
      >
        <div className="bg-black/60 p-10 rounded-xl backdrop-blur-md">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight">
            Ember House
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            A private sauna + cold plunge ritual space in Cabbagetown
          </p>
          <a
            href="#founding"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Join Founding Members
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl mb-8">Built for Ritual</h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
          Ember House is not a gym. Not a spa.  
          It is a place for heat, cold, stillness, and connection.
        </p>
      </section>

      {/* IMAGE SECTION */}
      <section className="grid md:grid-cols-3 gap-0">
        <img src="/sauna-detail.jpg" className="w-full h-96 object-cover" />
        <img src="/sauna-lounge.jpg" className="w-full h-96 object-cover" />
        <img src="/sauna-hero.jpg" className="w-full h-96 object-cover" />
      </section>

      {/* FOUNDING MEMBERS */}
      <section id="founding" className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto bg-white text-black p-10 rounded-2xl shadow-2xl">
          <h2 className="text-3xl mb-4">Founding Membership</h2>
          <p className="mb-6 text-gray-700">
            Limited early access to Ember House.
          </p>

          <div className="text-left mb-6">
            <p>• Lifetime discounted rate</p>
            <p>• Priority booking access</p>
            <p>• Early access before public launch</p>
            <p>• Fully refundable</p>
          </div>

          <div className="text-4xl font-bold mb-6">$99 Deposit</div>

          <a
            href="mailto:hello@emberhouse.com?subject=Founding Member Interest"
            className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Reserve Your Spot
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ember House — Cabbagetown, Atlanta
      </footer>
    </div>
  );
}
