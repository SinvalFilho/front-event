import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 p-4 text-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" aria-label="Página inicial">EventoApp</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline" aria-label="Ir para a página inicial">Home</Link>
          <Link to="/events" className="hover:underline" aria-label="Ver eventos">Eventos</Link>
          <Link to="/login" className="hover:underline" aria-label="Ir para a página de login">Login</Link>
          <Link to="/register" className="ml-4 bg-green-500 py-2 px-4 rounded hover:bg-green-600" aria-label="Ir para a página de registro">Registrar</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-white focus:outline-none"
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
      {/* Mobile menu */}
      <div className="md:hidden mt-4">
        <div className="space-y-2">
          <Link to="/" className="block py-2 px-4 bg-blue-600 rounded hover:bg-blue-700" aria-label="Ir para a página inicial">Home</Link>
          <Link to="/events" className="block py-2 px-4 bg-blue-600 rounded hover:bg-blue-700" aria-label="Ver eventos">Eventos</Link>
          <Link to="/login" className="block py-2 px-4 bg-blue-600 rounded hover:bg-blue-700" aria-label="Ir para a página de login">Login</Link>
          <Link to="/register" className="block py-2 px-4 bg-green-500 rounded hover:bg-green-600" aria-label="Ir para a página de registro">Registrar</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
