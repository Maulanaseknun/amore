import React, { useEffect, useState } from 'react';
import logo from '../assets/logo2.png';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  // Menu

  const navItems = [
    { link: 'BERANDA', path: 'beranda' },
    { link: 'TENTANG AMORE', path: 'tentang' },
    { link: 'LAYANAN', path: 'layanan' },
    { link: 'MITRA', path: 'mitra' },
  ];

  return (
    <>
      <header className="w-full bg-white  md:bg-transparent fixed top-0 left-0 right-0  ">
        <nav className={` py-2 lg:px-14  ${isSticky ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300' : ''}`}>
          <div className="flex justify-between  pr-4 items-center text-base gap-6 ">
            <a href="" className="text-2xl font-semibold flex items-center   ">
              <img src={logo} alt="" className="w-20  inline-block items-center   " />
              <span className="text-navi text-xs  ">AMORE TEKNOLOGI KREATIF</span>
            </a>
            <ul className="md:flex space-x-12   hidden ">
              {navItems.map(({ link, path }) => (
                <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-lg text-navi hover:text-orange first:font-medium ">
                  {link}
                </Link>
              ))}
            </ul>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-navi focus:outline-none focus:text-navi">
                {isMenuOpen ? <FaXmark className="h-6 w-6 text-navi" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
          <div className={`space-y-4 px-4 mt-16 py-7 bg-white ${isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'}`}>
            {navItems.map(({ link, path }) => (
              <Link to={path} spy={true} smooth={true}  offset={-100} key={path} className="block text-base text-navi hover:text-orange first:font-medium">
                {link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
