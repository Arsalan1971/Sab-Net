
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BuyModal from './BuyModal';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tokenomics', path: '/tokenomics' },
  { name: 'Roadmap', path: '/roadmap' },
  { name: 'Whitepaper', path: '/whitepaper' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeLinkStyle = {
    color: '#6366f1', // indigo-500
    textShadow: '0 0 5px #6366f1'
  };

  const handleBuyClick = () => {
    setIsMenuOpen(false); // Close mobile menu if open
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-900/70 backdrop-blur-lg border-b border-slate-700/50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
            SAB
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-slate-300 hover:text-indigo-400 transition-colors duration-300"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
              Buy SAB
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/90 py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-indigo-400 text-center py-2"
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                >
                  {link.name}
                </NavLink>
              ))}
              <button 
                onClick={handleBuyClick}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
                Buy SAB
              </button>
            </div>
          </div>
        )}
      </header>
      <BuyModal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
