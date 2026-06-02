import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'الرئيسية', path: '/' },
    { name: 'منتجاتنا', path: '/products' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 border-b ${
      scrolled 
        ? 'glass-nav py-1 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-white/10' 
        : 'bg-industrial-950 py-3 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105">
              <img 
                src="public/503479033_1100126365470742_7704255855353260207_n copy 2.jpg" 
                alt="لوجو الشريف" 
                className="w-full h-full object-cover" 
              />
            </div>
           
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-wide transition-colors duration-300 group-hover:text-accent-teal">شركة الشريف</span>
              <span className="text-xs text-industrial-300 transition-colors duration-300 group-hover:text-white">لخزانات البولي إيثيلين</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300 hover-underline hover:text-accent-teal pb-1 ${
                  location.pathname === link.path ? 'text-accent-teal font-bold' : 'text-industrial-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="group flex items-center gap-2 bg-gradient-to-r from-accent-teal to-accent-teal-dark text-white px-5 py-2 rounded-full font-bold transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] shadow-md hover:shadow-[0_8px_25px_rgba(14,165,233,0.35)] border border-white/10"
            >
              <PhoneCall size={16} className="transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110" />
              <span dir="ltr" className="tracking-wide text-sm">{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-industrial-200 hover:text-white transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-industrial-950/95 backdrop-blur-lg border-t border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'bg-industrial-800/80 text-accent-teal shadow-inner' 
                      : 'text-industrial-200 hover:bg-industrial-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="group mt-4 flex items-center justify-center gap-2.5 bg-gradient-to-r from-accent-teal to-accent-teal-dark text-white px-5 py-3.5 rounded-xl font-bold transition-all duration-300 active:scale-[0.98] shadow-md hover:shadow-[0_8px_25px_rgba(14,165,233,0.35)] border border-white/10"
              >
                <PhoneCall size={18} className="transition-transform duration-500 group-hover:rotate-[15deg]" />
                <span dir="ltr" className="tracking-wide">{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
