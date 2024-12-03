import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2 text-yellow-400">EventoApp</h2>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} EventoApp. Todos os direitos reservados.</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Links Rápidos</h3>
            <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-3 md:space-x-8 md:space-y-0">
              <li><a href="/about" className="hover:text-yellow-300 transition duration-300">Sobre Nós</a></li>
              <li><a href="/contact" className="hover:text-yellow-300 transition duration-300">Contato</a></li>
              <li><a href="/privacy" className="hover:text-yellow-300 transition duration-300">Política de Privacidade</a></li>
              <li><a href="/terms" className="hover:text-yellow-300 transition duration-300">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-2xl hover:text-blue-600 transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl hover:text-blue-700 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
