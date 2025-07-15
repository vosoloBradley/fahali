import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
      <div className="container mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 bg-[#FF10F0] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Fahali Building & Civil Engineering</span>
          </div>
          <div className="hidden sm:ml-4 sm:flex sm:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`w-full text-left px-2.5 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#FF10F0] hover:bg-gray-100 transition-colors ${
                  location.pathname === item.href
                    ? 'text-[#FF10F0] bg-[#FF10F0]/10 rounded-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg'
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
              className="ml-3 bg-[#FF10F0] hover:bg-[#e000d0] text-white px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Button>
          </div>
          <div className="sm:hidden">
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

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="mt-5 pt-4 sm:mt-0 sm:pt-0">
            <div className="px-2 space-y-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block pl-2 pr-2.5 py-1.5 text-sm font-medium ${
                    item.href === '/'
                      ? 'text-[#FF10F0] bg-[#FF10F0]/10'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button 
              onClick={() => handleNavigation('/get-a-quote')}
              className="w-full mt-1.5 bg-[#FF10F0] hover:bg-[#e000d0] text-white px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
