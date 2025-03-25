import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import '../styles/templates/blog.css';

const Blog = () => {
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
   
    <div>
      
   
  
 

  
  <Image
    src="/images/illustrations/leaf-orange.png"
    alt="illustrations"
    width={150}
    height={150}
    className="absolute bottom-0 left-0"
  />
  <Image
    src="/images/illustrations/leaf-cyan-2.png"
    alt="illustrations"
    width={150}
    height={150}
    className="absolute bottom-0 right-0"
  />
  <Image
    src="/images/illustrations/leaf-orange.png"
    alt="illustrations"
    width={100}
    height={100}
    className="absolute top-0 right-10"
  />

 
  

     
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                className="w-full h-48 object-cover"
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
                <Link href={post.link} className="mt-4 inline-block  font-medium bg-[#4A148C] text-center text-white">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>

    
      
      
      
    </>
  );
};

export default Blog;