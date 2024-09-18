import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUserPlus } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo ao EventoApp</h1>
        <p className="mb-4">
          Organize e gerencie seus eventos com facilidade. Use as funcionalidades para criar, editar e gerenciar eventos e participantes.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/events"
            className="bg-blue-500 text-white py-2 px-4 rounded flex items-center hover:bg-blue-600"
          >
            <FaCalendarAlt className="mr-2" />
            Ver Eventos
          </Link>
          <Link
            to="/register"
            className="bg-green-500 text-white py-2 px-4 rounded flex items-center hover:bg-green-600"
          >
            <FaUserPlus className="mr-2" />
            Registrar
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
