"use client";

import Clients from "@/components/client";
import Education from "@/components/education";
import Experience from "@/components/experiance";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/contact-form";
import SkillsCopy from "@/components/skillscopy";
import Blog from "@/components/blog";

export default function Page() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-[#3E1D73] min-h-screen text-white overflow-hidden flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold">Hi! I'm</h2>
        <h2 className="text-4xl md:text-6xl font-bold mt-2">Christopher UX Designer</h2>
        <div className="mt-6 flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-white text-black py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-semibold leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href="#" className="text-[#3E1D73] font-semibold mt-6 inline-block hover:underline">Know More</Link>
        </div>
      </div>

      {/* Sections */}
      <section id="skills"><SkillsCopy /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="services"><Services /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="clients"><Clients /></section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-100 text-black">
        <h1 className="text-5xl font-bold text-center">Blogs</h1>
        <Blog />
      </section>

      {/* Contact Section */}
      <section id="contact"><ContactSection /></section>
    </main>
    
  );
}
