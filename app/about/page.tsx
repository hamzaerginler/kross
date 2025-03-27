"use client"
import Clients from "@/components/client";

import Navbar from "@/components/navbar";
import Image from "next/image";



export default function Page() {
  return (
    <>

      <Navbar />


      <section className="relative bg-[#4A148C] py-70 text-  text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">About Me</h1>
        </div>


        <Image src="/images/illustrations/leaf-yellow.png" alt="illustrations" width={120} height={120} className="absolute top-20 right-20 grid-mobile" />

      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10">
          <div className="md:w-2/3">
            <p className="mb-4 text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-4 text-black">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="mb-4 text-black">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="md:w-1/3 text-center">
            <div className="shadow-lg rounded-lg overflow-hidden">
              <Image src="/images/about/author.jpg" alt="Author" width={300} height={400} className="w-full rounded-lg" />
            </div>
            <Image src="/images/about/signature.jpg" alt="signature" width={172} height={88} className="mx-auto mt-4" />
            <h4 className="mt-2 text-xl font-semibold">Johnathan Smith</h4>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-6xl font-bold mb-8">Work Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40 grid-mobile">

            <div className="text-center">
              <Image src="/images/icons/plan.png" alt="Research and Plan" width={50} height={50} className="mx-auto" />
              <h3 className="font-semibold text-lg mt-4">Research and Plan</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>


            <div className="text-center">
              <Image src="/images/icons/design.png" alt="Design and Develop" width={50} height={50} className="mx-auto" />
              <h3 className="font-semibold text-lg mt-4">Design and Develop</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>


            <div className="text-center">
              <Image src="/images/icons/print.png" alt="Deliver" width={50} height={50} className="mx-auto" />
              <h3 className="font-semibold text-lg mt-4">Deliver</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cover text-center mt-20" style={{ background: "url('/images/backgrounds/team-bg.png')" }}>
        <div className="relative w-full max-w-10xl  shadow-lg rounded-xl p-10">
          <div className="absolute inset-0 ">

          </div>

        
          <h2 className="text-6xl font-bold text-center relative z-10 mb-10">My Team</h2>

         
          <div className="flex flex-wrap justify-center gap-6 relative z-10">

            <div className="w-72 bg-white shadow-md rounded-xl p-4 text-center">
              <Image
                src="/images/team/member-1.png"
                alt="Jack Schenziwe"
                width={300}
                height={300}
                className="rounded-lg object-cover grid-mobile"
              />
              <h4 className="text-xl font-semibold mt-4">Jack Schenziwe</h4>
              <p className="text-gray-500">Project Manager</p>
            </div>


            <div className="w-72 bg-white shadow-md rounded-xl p-4 text-center">
              <Image
                src="/images/team/member-2.png"
                alt="Jane Doe"
                width={300}
                height={300}
                className="rounded-lg object-cover grid-mobile"
              />
              <h4 className="text-xl font-semibold mt-4">Jack Schenziwe</h4>
              <p className="text-gray-500">Project Manager</p>
            </div>


            <div className="w-72 bg-white shadow-md rounded-xl p-4 text-center">
              <Image
                src="/images/team/member-3.png"
                alt="John Smith"
                width={300}
                height={300}
                className="rounded-lg object-cover grid-mobile"
              />
              <h4 className="text-xl font-semibold mt-4">Jack Schenziwe</h4>
              <p className="text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
      
      <Clients />
      
      <section className="section bg-cover text-center mt-20" style={{ background: "url('/images/backgrounds/bg-dots.jpg')" }}>
     
      <div className="container mx-auto px-4 py-12 ">
        <h1 className="text-6xl font-bold text-center mb-8 ">Contact Info</h1>
     

        <div className="max-w-2xl mx-auto relative ">
          <div className="bg-white shadow-md rounded-lg p-8 relative z-10 ">
            <div className="flex space-x-4 mb-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-1/2 border border-gray-300 px-4 py-2 rounded-md"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-1/2 border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>
            <textarea 
              placeholder="Type Message Here" 
              className="w-full h-32 border border-gray-300 px-4 py-2 rounded-md mb-4"
            ></textarea>
            <button 
              className="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800"
            >
              Send
            </button>
          </div>
        </div>
      </div>

    
      </section>
    
    








    </>
  );
}
