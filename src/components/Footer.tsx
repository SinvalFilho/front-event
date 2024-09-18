import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">EventoApp</h2>
            <p>&copy; {new Date().getFullYear()} EventoApp. Todos os direitos reservados.</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-md font-medium mb-2">Links Rápidos</h3>
            <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-x-6 md:space-y-0">
              <li><a href="/about" className="hover:underline">Sobre Nós</a></li>
              <li><a href="/contact" className="hover:underline">Contato</a></li>
              <li><a href="/privacy" className="hover:underline">Política de Privacidade</a></li>
              <li><a href="/terms" className="hover:underline">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-2xl hover:text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl hover:text-blue-700" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
