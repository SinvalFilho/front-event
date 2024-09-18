import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-800 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold" aria-label="Página inicial">
          EventoApp
        </Link>
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
        <div className="md:hidden flex items-center">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
