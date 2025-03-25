import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
      ${scrolled ? 'bg-[#3E1D73] h-[80px]' : 'bg-transparent h-[120px]'}
      flex items-center justify-between px-8 py-4`}>
      <div className="text-white text-xl font-bold">kross</div>
      
      <div className="hidden md:flex space-x-6 text-white text-sm uppercase">
        <Link href="/" className="hover:text-gray-400 transition-colors">HOME</Link>
        <Link href="/about" className="hover:text-gray-400 transition-colors">ABOUT</Link>
        <Link href="/blog" className="hover:text-gray-400 transition-colors">BLOG</Link>
        <Link href="/portfolio" className="hover:text-gray-400 transition-colors">PORTFOLIO</Link>
        <Link href="/contact" className="hover:text-gray-400 transition-colors">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;