import React, { useEffect, useRef } from 'react';
import logoImg from '/public/assets/images/logo.png';
import { gsap } from 'gsap';

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    // GSAP animation for navbar entry
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });

    // GSAP animation for hiding navbar on scroll
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        gsap.to(navbarRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        // Scrolling up
        gsap.to(navbarRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navbarRef} className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center justify-between rounded-full p-[2px] bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md">
        <div className="flex items-center space-x-4 bg-gray-900/50 rounded-full px-4 py-1">
          
          <div className="flex items-center justify-center w-10 h-10">
            <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
          </div>

          <ul className="flex space-x-4 text-white">
            <li className="relative group">
              <a
                href="#hero"
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-yellow-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-400 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Home
              </a>
            </li>
            <li className="relative group">
              <a
                href="#about"
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-yellow-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-400 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                About
              </a>
            </li>
            <li className="relative group">
              <a
                href="#case"
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-yellow-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-yellow-400 before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Case
              </a>
            </li>
          </ul>

          <div className="flex items-center">
            <a
              href="#3d"
              className="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-yellow-500 transition-all duration-300"
            >
              3D
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
