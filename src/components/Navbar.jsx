/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/Trillion Apps tech (1) 1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const servicesLinks = [
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "ERP Development", path: "/services/erp-development" },
    { name: "Web Development", path: "/services/web-development" },
    { name: "Mobile App Development", path: "/services/mobile-app" },
  ];

  return (
  <nav className="fixed w-full top-0 z-50" style={{ background: '#1a1a2e' }}>
    
    <div className="max-w-xxl mx-auto flex items-stretch">

      {/* LEFT SIDE LOGO */}
      <div className="flex items-center px-6">
        <Link to="/">
          <img
            src={logo}
            alt="Trillion Apps Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* ── TOP BAR ── */}
        <div
          className="flex items-center text-sm w-full"
          style={{ background: '#12121f' }}
        >
          {/* Email + Timing - Left Side */}
          <div className="flex items-center gap-6 px-6 py-3 flex-wrap">
            
            <div className="flex items-center gap-2 text-[#bbb]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              manager@trillionappstechnology.com
            </div>

            <div className="flex items-center gap-2 text-[#bbb]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Monday to Friday 9.00AM to 6.00PM
            </div>
          </div>

          {/* Social Icons - Pushed to Far Right */}
          <div className="ml-auto flex items-center">
            <div
              className="flex items-center top-0 gap-5 px-9 py-3"
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
        </div>


        {/* ── NAVIGATION BAR ── */}
        <div className="flex justify-between items-center px-6 py-3">

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12 ">

            {navLinks.map((link) => (
              <div key={link.name} className="relative">

                {link.name === 'Services' ? (
                  <>
                    <Link
                      to="/services"
                      className="flex items-center gap-1 font-medium"
                      style={{
                        fontSize: '18px',
                        color: location.pathname.includes('/services') ? '#a78bfa' : '#ccc',
                      }}
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      Services
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </Link>

                    {isServicesDropdownOpen && (
                      <div
                        className="absolute top-full mt-3 rounded-xl py-1.5"
                        style={{
                          background: '#1e1e32',
                          border: '1px solid #2e2e4a',
                          minWidth: 210
                        }}
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      >
                        {servicesLinks.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="block px-4 py-2 text-[#bbb] hover:text-white hover:bg-[#2a2a44]"
                            style={{ fontSize: '15px' }}
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
                    className="font-medium"
                    style={{
                      fontSize: '18px',
                      color: location.pathname === link.path ? '#a78bfa' : '#ccc'
                    }}
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
            className="hidden md:block font-semibold text-white px-6 py-3 rounded-lg"
            style={{ 
              background: '#6c5ce7',
              fontSize: '18px'
            }}
          >
            Contact Us
          </Link>

        </div>

      </div>
    </div>

  </nav>
);
};

export default Navbar;