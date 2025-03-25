import Image from "next/image";

const Portfolio = () => {
  const projects = [
    { 
      src: "/images/portfolio/item-1.png", 
      alt: "Cloud and Feathers", 
      
    },
    { 
      src: "/images/portfolio/item-2.png", 
      alt: "Game Boy", 
       
    },
    { 
      src: "/images/portfolio/item-3.png", 
      alt: "Alarm Clock", 
      
    },
    { 
      src: "/images/portfolio/item-4.png", 
      alt: "Milk Bottles", 
     
    },
    { 
      src: "/images/portfolio/item-5.png", 
      alt: "Game Controller", 
      
    },
  
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-8">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`hover-wrapper relative aspect-square flex items-center justify-center overflow-hidden`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-contain p-6 transition-transform duration-300 ease-in-out group-hover:scale-100"
              />
              <div className="hover-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <div className="hover-content">
                  <a 
                    href="#" 
                    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 