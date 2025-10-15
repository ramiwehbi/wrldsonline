
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkStyle = {
    color: '#86efac', // green-300
    textShadow: '0 0 8px #34d399, 0 0 12px #34d399',
  };

  return (
    <header className="py-4 px-8 border-b border-green-500/20 backdrop-blur-sm sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-widest text-green-500 hover:text-green-300 transition-colors duration-300 hover:glow"
        >
          wrlds.online
        </NavLink>
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              className="text-lg hover:text-green-300 transition-colors duration-300 hover:glow"
            >
              // Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/artists"
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              className="text-lg hover:text-green-300 transition-colors duration-300 hover:glow"
            >
              // Artists
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              className="text-lg hover:text-green-300 transition-colors duration-300 hover:glow"
            >
              // Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
