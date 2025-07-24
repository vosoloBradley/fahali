import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setIsMenuTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMenuTransitioning(true);
    setTimeout(() => setIsMenuTransitioning(false), 300);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/certifications' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];




  const handleNavigation = (href: string) => {
    navigate(href);
    if (href.startsWith('/#')) {
      // Handle anchor links
      const element = document.querySelector(href.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/30 backdrop-blur-sm shadow-lg border-b border-white/20'
        : 'bg-white/30 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 bg-[#FF10F0] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900 ml-3">Fahali</span>
          </div>
          <div className="hidden sm:flex flex-1 justify-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#FF10F0] hover:bg-gray-100 transition-colors ${
                  location.pathname === item.href
                    ? 'text-[#FF10F0] bg-[#FF10F0]/10 rounded-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md'
                }`}
                onClick={() => handleNavigation(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => handleNavigation('/get-a-quote')}
              className="bg-[#FF10F0] hover:bg-[#e000d0] text-white px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Button>
          </div>
          <div className="flex sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg p-1.5 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile menu content */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col bg-white">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-white">
            <span className="text-xl font-bold text-gray-900 ml-3">Fahali</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg p-1.5 transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-4 flex-1 px-3 space-y-0.5 bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                  location.pathname === item.href
                    ? 'text-[#FF10F0] bg-[#FF10F0]/10 font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => handleNavigation(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto px-4 py-3 border-t border-gray-200 flex justify-center">
            <div className="w-full max-w-xs">
              <Button 
                onClick={() => handleNavigation('/get-a-quote')}
                className="w-full bg-[#FF10F0] hover:bg-[#e000d0] text-white px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
