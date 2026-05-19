import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-sage/90 dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="font-bold text-2xl text-cream hover:text-brown dark:hover:text-sage transition-colors"
            >
              lokkie-bos
            </button>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-cream hover:text-brown dark:hover:text-sage transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('shop')}
                className="text-cream hover:text-brown dark:hover:text-sage transition-colors font-medium"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-cream hover:text-brown dark:hover:text-sage transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-cream hover:text-brown dark:hover:text-sage transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            <DarkModeToggle />

            <button
              className="md:hidden text-cream"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-cream hover:text-brown dark:hover:text-sage transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="block w-full text-left py-2 text-cream hover:text-brown dark:hover:text-sage transition-colors"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-cream hover:text-brown dark:hover:text-sage transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-cream hover:text-brown dark:hover:text-sage transition-colors"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
