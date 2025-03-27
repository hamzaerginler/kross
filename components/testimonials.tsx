"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jesica Gomez",
    title: "CEO, Funder",
    image: "/images/testimonial/client-1.png"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jesica Gomez",
    title: "CEO, Funder",
    image: "/images/testimonial/client-1.png"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jesica Gomez",
    title: "CEO, Funder",
    image: "/images/testimonial/client-1.png"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentSlide];

  return (
    <section className="section bg-primary relative testimonial-bg-shapes py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold">Testimonials</h2>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center testimonial-content">
            <i className="ti-quote-right text-white text-4xl mb-6 inline-block"></i>
            
            <p className="text-white text-lg mb-6">
              {currentTestimonial.quote}
            </p>
            
            <div className="flex flex-col items-center">
              <Image 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              
              <h4 className="text-white text-xl font-semibold">{currentTestimonial.name}</h4>
              <h6 className="text-light text-sm">{currentTestimonial.title}</h6>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide} 
              className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition"
            >
              Previous
            </button>
            <button 
              onClick={nextSlide} 
              className="bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition"
            >
              Next
            </button>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <Image 
        src="/images/backgrounds/map.png" 
        alt="map" 
        width={500} 
        height={500} 
        className="absolute bottom-0 left-0 opacity-20 z-0"
      />
      <Image 
        src="/images/illustrations/dots-group-v.png" 
        alt="bg-shape" 
        width={200} 
        height={200} 
        className="absolute top-0 right-0 opacity-30 z-0"
      />
      {/* Diğer background shape'ler için benzer şekilde ekleyebilirsiniz */}
    </section>
  );
};

export default Testimonials;