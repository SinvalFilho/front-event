import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUserPlus } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 text-white flex flex-col justify-center items-center">
      <main className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Bem-vindo ao EventoApp</h1>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Organize e gerencie seus eventos com facilidade. Use nossas ferramentas intuitivas para criar, editar e gerenciar
          eventos e participantes de forma eficiente e rápida.
        </p>
        <div className="flex space-x-4 justify-center">
          <Link
            to="/events"
            className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg flex items-center transition duration-300 transform hover:scale-105"
          >
            <FaCalendarAlt className="mr-2 text-2xl" />
            Ver Eventos
          </Link>
          <Link
            to="/register"
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center transition duration-300 transform hover:scale-105"
          >
            <FaUserPlus className="mr-2 text-2xl" />
            Registrar
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
