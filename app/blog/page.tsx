"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";


const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Amazon increase income 1.5 Million",
      imgSrc: "/images/blog/post-5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/blog-single",
    },
    {
      id: 2,
      title: "Amazon increase income 1.5 Million",
      imgSrc: "/images/blog/post-2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/blog-single",
    },
    {
      id: 3,
      title: "Amazon increase income 1.5 Million",
      imgSrc: "/images/blog/post-3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/blog-single",
    },
  ];

  const clients = [
    "/images/clients-logo/client-logo-1.jpg",
    "/images/clients-logo/client-logo-2.jpg",
    "/images/clients-logo/client-logo-3.jpg",
    "/images/clients-logo/client-logo-4.jpg",
    "/images/clients-logo/client-logo-5.jpg",
  ];

  return (
    <>
    <Navbar />
    <div>
      
      <section className="relative bg-[#4A148C] py-60 text-center text-white">
  
  <div className="absolute inset-0 bg-[url('/images/illustrations/background.svg')] bg-cover bg-center opacity-30"></div>

  
  
  <Image
    src="/images/illustrations/leaf-cyan-2.png"
    alt="illustrations"
    width={150}
    height={150}
    className="absolute bottom-0 right-0 grid-mobile"
  />
 

 
  <h1 className="relative z-10 text-5xl font-bold grid-mobile">Blogs</h1>
</section>

     
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-mobile">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                className="w-full h-48 object-cover grid-mobile"
                src={post.imgSrc}
                alt={post.title}
                width={400}
                height={300}
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">
                  <Link href={post.link}>{post.title}</Link>
                </h4>
                <p className="text-gray-600 mt-2">{post.description}</p>
                <Link href={post.link} className="mt-4 inline-block text-primary font-medium">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-semibold">My Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-mobile">
            {clients.map((client, index) => (
              <Image key={index} src={client} alt="Client Logo" width={60} height={50} />
            ))}
          </div>
        </div>
      </section>
    </div>

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
};

export default BlogPage;