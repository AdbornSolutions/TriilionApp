/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/Trillion Apps tech (1) 1.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'ERP Development', path: '/services/erp-development' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300`}
      style={{ background: '#1a1a2e' }}
    >
      {/* ── TOP BAR ── */}
      <div
        className="w-full flex items-center justify-between text-sm"
        style={{ background: '#12121f', borderBottom: '1px solid #2a2a3e' }}
      >
        {/* Left: contact info */}
        <div className="flex items-center gap-6 px-6 py-2 flex-wrap">
          <div className="flex items-center gap-2" style={{ color: '#bbb' }}>
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
            manager@trillionappstechnology.com
          </div>
          <div className="flex items-center gap-2" style={{ color: '#bbb' }}>
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Monday to Friday 9.00AM to 6.00PM
          </div>
        </div>

        {/* Right: social icons */}
        <div
          className="flex items-center gap-4 px-5 py-2 self-stretch"
          style={{ background: '#6c5ce7' }}
        >
          {/* Facebook */}
          <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#6c5ce7" />
            </svg>
          </a>
          {/* Pinterest */}
          <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.16 1.22-5.16s-.31-.62-.31-1.55c0-1.45.84-2.54 1.89-2.54.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.53 1.88 1.83 0 3.06-2.34 3.06-5.11 0-2.11-1.43-3.58-3.47-3.58-2.36 0-3.74 1.77-3.74 3.6 0 .71.27 1.47.62 1.89.07.08.08.15.06.23l-.23.95c-.04.14-.12.17-.28.1-1.05-.49-1.7-2.02-1.7-3.25 0-2.64 1.92-5.07 5.53-5.07 2.9 0 5.15 2.07 5.15 4.83 0 2.88-1.81 5.19-4.33 5.19-.85 0-1.64-.44-1.91-.96l-.52 1.94c-.19.72-.7 1.62-1.04 2.17.78.24 1.6.37 2.45.37 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </a>
          {/* X / Twitter */}
          <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
 <img
    src={logo}
    alt="Trillion Apps Logo"
    className="h-12 md:h-14 w-auto object-contain"
  />
</Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.name === 'Services' ? (
                  <>
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                      style={{
                        color: location.pathname.includes('/services') ? '#a78bfa' : '#ccc',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}
                    >
                      Services
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200"
                        style={{ transform: isServicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {isServicesDropdownOpen && (
                      <div
                        className="absolute top-full mt-3 rounded-xl py-1.5 z-50"
                        style={{
                          left: '50%',
                          transform: 'translateX(-50%)',
                          minWidth: 210,
                          background: '#1e1e32',
                          border: '1px solid #2e2e4a',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                        }}
                      >
                        {servicesLinks.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            onClick={() => setIsServicesDropdownOpen(false)}
                            className="block px-4 py-2 text-sm transition-colors duration-150"
                            style={{
                              color: location.pathname === service.path ? '#a78bfa' : '#bbb',
                              textDecoration: 'none',
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = '#2a2a44';
                              e.currentTarget.style.color = '#fff';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = location.pathname === service.path ? '#a78bfa' : '#bbb';
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="text-sm font-medium transition-colors duration-200"
                    style={{
                      color: location.pathname === link.path ? '#a78bfa' : '#ccc',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = location.pathname === link.path ? '#a78bfa' : '#ccc'}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="hidden md:block text-sm font-semibold text-white px-5 py-2.5 rounded-lg transition-colors duration-200"
            style={{ background: '#6c5ce7', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.background = '#7d6ff0'}
            onMouseLeave={e => e.currentTarget.style.background = '#6c5ce7'}
          >
            Contact Us
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ccc' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-1"
          style={{ background: '#12121f', borderTop: '1px solid #2a2a3e' }}
        >
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.name === 'Services' ? (
                <div>
                  <button
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    className="flex items-center justify-between w-full py-2.5 text-sm font-medium"
                    style={{
                      color: location.pathname.includes('/services') ? '#a78bfa' : '#bbb',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      borderBottom: '1px solid #1e1e32',
                    }}
                  >
                    Services
                    <svg
                      className="w-4 h-4 transition-transform duration-200"
                      style={{ transform: isServicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {isServicesDropdownOpen && (
                    <div className="pl-4 mt-1 flex flex-col" style={{ borderLeft: '2px solid #6c5ce7' }}>
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => { setIsMobileMenuOpen(false); setIsServicesDropdownOpen(false); }}
                          className="py-2 text-sm"
                          style={{
                            color: location.pathname === service.path ? '#a78bfa' : '#bbb',
                            textDecoration: 'none',
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 text-sm font-medium"
                  style={{
                    color: location.pathname === link.path ? '#a78bfa' : '#bbb',
                    textDecoration: 'none',
                    borderBottom: '1px solid #1e1e32',
                  }}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-3 text-center text-sm font-semibold text-white py-3 rounded-lg"
            style={{ background: '#6c5ce7', textDecoration: 'none' }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;