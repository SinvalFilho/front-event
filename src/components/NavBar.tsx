import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-800 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold" aria-label="Página inicial">
          EventoApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded" aria-label="Ir para a página inicial">
            Home
          </Link>
          <Link to="/events" className="hover:bg-blue-700 px-3 py-2 rounded" aria-label="Ver eventos">
            Eventos
          </Link>
          <Link to="/login" className="hover:bg-blue-700 px-3 py-2 rounded" aria-label="Ir para a página de login">
            Login
          </Link>
          <Link to="/register" className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded" aria-label="Ir para a página de registro">
            Registrar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden mt-4 bg-blue-800`}>
        <div className="flex flex-col space-y-2 p-4">
          <Link to="/" className="block py-2 px-4 text-white rounded hover:bg-blue-700" aria-label="Ir para a página inicial">
            Home
          </Link>
          <Link to="/events" className="block py-2 px-4 text-white rounded hover:bg-blue-700" aria-label="Ver eventos">
            Eventos
          </Link>
          <Link to="/login" className="block py-2 px-4 text-white rounded hover:bg-blue-700" aria-label="Ir para a página de login">
            Login
          </Link>
          <Link to="/register" className="block py-2 px-4 text-white bg-green-600 rounded hover:bg-green-700" aria-label="Ir para a página de registro">
            Registrar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
