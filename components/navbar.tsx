"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
      ${scrolled ? 'bg-[#3E1D73] h-[80px]' : 'bg-transparent h-[120px]'}
      flex items-center justify-between px-8 py-4`}>
      
      
      <div className="text-white text-xl font-bold">kross</div>


      <button 
        className="md:hidden flex flex-col items-center justify-center space-y-1.5 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-white text-sm uppercase">
        <Link href="/" className="hover:text-gray-300 transition-colors">HOME</Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors">ABOUT</Link>
        <Link href="/blog" className="hover:text-gray-300 transition-colors">BLOG</Link>
        <Link href="/portfolio" className="hover:text-gray-300 transition-colors">PORTFOLIO</Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors">CONTACT</Link>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 w-full max-w-xs h-full bg-[#3E1D73] shadow-lg transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Close Button (X icon using CSS) */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Close menu"
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -rotate-45"></span>
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform rotate-45"></span>
            </div>
          </button>
          
          {/* Menu Items */}
          <div className="flex flex-col space-y-6 p-8 mt-20">
            <Link 
              href="/" 
              className="text-white text-lg py-2 border-b border-white/10 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="text-white text-lg py-2 border-b border-white/10 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/blog" 
              className="text-white text-lg py-2 border-b border-white/10 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link 
              href="/portfolio" 
              className="text-white text-lg py-2 border-b border-white/10 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PORTFOLIO
            </Link>
            <Link 
              href="/contact" 
              className="text-white text-lg py-2 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;