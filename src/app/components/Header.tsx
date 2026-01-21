import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="cresCER Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium">
              Início
            </Link>
            <Link to="/loja" className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium">
              Loja Online
            </Link>
            <Link to="/formacoes" className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium">
              Formações
            </Link>
            <Link to="/novidades" className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium">
              Novidades
            </Link>
            <Link to="/quem-somos" className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium">
              Quem Somos
            </Link>
            <Link to="/contactos" className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium">
              Contactos
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-[#4CAF50] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/loja"
                className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Loja Online
              </Link>
              <Link
                to="/formacoes"
                className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Formações
              </Link>
              <Link
                to="/novidades"
                className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Novidades
              </Link>
              <Link
                to="/quem-somos"
                className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                to="/contactos"
                className="text-gray-700 hover:text-[#2FA4E7] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contactos
              </Link>
              <div className="pt-4 border-t flex gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <User className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}