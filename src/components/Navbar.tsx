
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CustomButton } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import GetStartedModal from './GetStartedModal';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/#products' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Technology', href: '/#technology' },
  { label: 'Resources', href: '/water-research' },
  { label: 'Opportunity', href: '/business-opportunity' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-2xl">
          <span className="gradient-text">Kangen</span>
          <span className="text-gray-800">Water</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith('/#') ? (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-kangen-600 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-kangen-600 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <GetStartedModal>
            <CustomButton size="sm">Get Started</CustomButton>
          </GetStartedModal>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform md:hidden pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container mx-auto px-4 py-6">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith('/#') ? (
                  <a
                    href={item.href}
                    className="text-gray-800 text-lg font-medium block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-800 text-lg font-medium block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-4">
              <GetStartedModal>
                <CustomButton className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </CustomButton>
              </GetStartedModal>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
