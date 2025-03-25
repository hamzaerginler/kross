import React from 'react';

interface ContactFormProps {}

const ContactSection: React.FC<ContactFormProps> = () => {
  return (
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

    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-4">Email</h4>
          <p>steve.fruits@email.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Phone</h4>
          <p>+880 2544 658 256</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Address</h4>
          <p>125A, CA Commercial Area,<br />California, USA</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        Copyright © 2023 Designed & Developed by ThemeFisher
      </div>
    </footer>
    </section>
  );
};

export default ContactSection;