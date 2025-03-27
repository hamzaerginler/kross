"use client"
import Clients from "@/components/client";
import Education from "@/components/education";
import Experience from "@/components/experiance";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Link from "next/link";
import ContactSection from "@/components/contact-form";
import SkillsCopy from "@/components/skillscopy";
import Blog from "@/components/blog";

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      
      
      <div className="relative bg-[#3E1D73] min-h-screen text-white overflow-hidden flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi! I'm
            </h2>
            <h2 className="text-6xl sm:text-4xl md:text-5xl lg:text-9xl font-bold text-[#FFD700]">
              Christoher UX designer
            </h2>
            <div className="flex justify-center space-x-2 py-4">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className="w-2 h-2 bg-yellow-400 rounded-full"
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-white text-black py-12 md:py-20 px-4 md:px-16">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </p>
          <Link 
            href="#" 
            className="text-[#3E1D73] font-semibold mt-6 inline-block hover:underline"
          >
            Know More
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-16 sm:space-y-20 md:space-y-24">
        <SkillsCopy />
        <Experience />
        <Education />
        <Services />
        <Portfolio />
        <Testimonials />
        <Clients />
        
        <h1 className="text-3xl md:text-5xl font-bold text-center py-8">
          Blogs
        </h1>
        <Blog />
        <ContactSection />
        
       
      </div>
    </main>
  );
}