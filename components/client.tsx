import Image from "next/image";

const clients = [
  { name: "Slack", logo: "/images/clients-logo/client-logo-2.jpg", link: "https://slack.com" },
  { name: "Airbnb", logo: "/images/clients-logo/client-logo-3.jpg", link: "https://airbnb.com" },
  { name: "Forbes", logo: "/images/clients-logo/client-logo-4.jpg", link: "https://forbes.com" },
  { name: "Sundance", logo: "/images/clients-logo/client-logo-5.jpg", link: "https://sundance.com" },
  { name: "Envato", logo:"/images/clients-logo/client-logo-1.jpg", link: "https://envato.com" },
];

const Clients = () => {
  return (
    <section className="py-16 bg-white slider mt-5">
      <div className="container mx-auto text-center mt-5">
        {/* <h2 className="text-6xl text-center font-bold mb-8 ">My Clients</h2> */}
        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client) => (
            <div key={client.name} className="w-24 h-12 grayscale hover:grayscale-0 transition mt-5">
              <Image src={client.logo} alt={client.name} width={96} height={48} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
