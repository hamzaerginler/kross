import Image from "next/image";
import '../styles/templates/portfolio.css';

const PortfolioPage = () => {
    return (
        <>

            <section className="relative bg-[#4A148C] py-50 text-center text-white">
                <h1 className="text-5xl font-bold">Portfolio</h1>


                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/illustrations/page-title.png"
                        alt="background"
                        fill
                        className="object-cover"
                    />
                </div>
                <Image
                    src="/images/illustrations/leaf-pink-round.png"
                    alt="illustrations"
                    width={100}
                    height={100}
                    className="absolute left-10 top-10"
                />
                <Image
                    src="/images/illustrations/dots-cyan.png"
                    alt="illustrations"
                    width={80}
                    height={80}
                    className="absolute right-10 top-20"
                />
            </section>

            <section className="py-12">
                <div className="container mx-auto">
                    <div className="flex justify-center space-x-10">
                        {["All", "UI/UX Design", "Branding", "Illustration"].map((filter) => (
                            <button
                                key={filter}
                                className="px-4 py-2 bg-[#4A148C] text-white rounded-md hover:bg-[#4A148C] transition"
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "/images/portfolio/item-1.png",
                        "/images/portfolio/item-2.png",
                        "/images/portfolio/item-3.png",
                        
                        "/images/portfolio/item-8.png",
                        "/images/portfolio/item-5.png",
                    ].map((src, index) => (
                        <div key={index} className="relative group rounded-lg overflow-hidden">
                            <Image
                                src={src}
                                alt={`Portfolio item ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity">
                                <button className="px-4 py-2 bg-white text-black rounded-md shadow-md">
                                    View Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </>
    );
};

export default PortfolioPage;
