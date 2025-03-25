export default function Services() {
    const services = [
      {
        title: "UI Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "🎨",
      },
      {
        title: "UX Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "🖥️",
        highlight: true, // Ortadaki kart farklı olacak
        backgroundColor: "#3E1D73",
      },
      {
        title: "Interaction Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: "⚙️",
      },
    ];
  
    return (
      <section className="bg-white text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl text-black font-bold mb-10">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl shadow-lg transition-all ${
                  service.highlight
                    ? "bg-[#4A2FBD] text-white border-2 border-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }