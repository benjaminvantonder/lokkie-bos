import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-sage/90 dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="font-bold text-2xl text-cream hover:text-brown dark:hover:text-sage transition-colors"
            >
              lokkie-bos
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-8" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors font-medium ${
                    location.pathname === link.to
                      ? 'text-brown dark:text-sage'
                      : 'text-cream hover:text-brown dark:hover:text-sage'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <DarkModeToggle />

            <button
              className="md:hidden text-cream"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden"
              aria-label="Mobile navigation"
            >
              <div className="pb-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left py-2 transition-colors ${
                      location.pathname === link.to
                        ? 'text-brown dark:text-sage'
                        : 'text-cream hover:text-brown dark:hover:text-sage'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
