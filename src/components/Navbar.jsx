import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/Trillion Apps tech (1) 1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full shadow-lg" style={{ background: "#1a1a2e" }}>
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-stretch lg:min-h-0">
        <div className="flex items-center px-4 sm:px-6">
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src={logo}
              alt="Trillion Apps Logo"
              className="h-10 w-auto object-contain sm:h-12 lg:h-14"
            />
          </Link>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="hidden w-full items-center text-sm lg:flex" style={{ background: "#12121f" }}>
            <div className="flex flex-wrap items-center gap-6 px-6 py-3">
              <div className="flex items-center gap-2 text-[#bbb]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
                manager@trillionappstechnology.com
              </div>

              <div className="flex items-center gap-2 text-[#bbb]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Monday to Friday 9.00AM to 6.00PM
              </div>
            </div>

            <div className="ml-auto flex items-center">
              <div className="flex items-center gap-5 px-9 py-3" style={{ background: "#6c5ce7" }}>
                <a href="#" className="text-white opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-white opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" className="text-white opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#6c5ce7" />
                  </svg>
                </a>
                <a href="#" className="text-white opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end px-4 py-4 sm:px-6 lg:justify-between lg:py-3">
            <div className="hidden items-center gap-8 lg:flex xl:gap-12">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.name === "Services" ? (
                    <>
                      <Link
                        to="/services"
                        className="flex items-center gap-1 font-medium"
                        style={{
                          fontSize: "18px",
                          color: location.pathname.includes("/services") ? "#a78bfa" : "#ccc",
                        }}
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      >
                        Services
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </Link>

                      {isServicesDropdownOpen && (
                        <div
                          className="absolute top-full mt-3 rounded-xl py-1.5"
                          style={{
                            background: "#1e1e32",
                            border: "1px solid #2e2e4a",
                            minWidth: 210,
                          }}
                          onMouseEnter={() => setIsServicesDropdownOpen(true)}
                          onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        >
                          {servicesLinks.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="block px-4 py-2 text-[#bbb] hover:bg-[#2a2a44] hover:text-white"
                              style={{ fontSize: "15px" }}
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
                        fontSize: "18px",
                        color: location.pathname === link.path ? "#a78bfa" : "#ccc",
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="hidden rounded-lg px-6 py-3 font-semibold text-white lg:block"
              style={{ background: "#6c5ce7", fontSize: "18px" }}
            >
              Contact Us
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#151528] lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="mb-4 space-y-3 text-sm text-[#bbb]">
              <div className="flex items-start gap-2 break-all">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
                <span>manager@trillionappstechnology.com</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Monday to Friday 9.00AM to 6.00PM</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.name === "Services" ? (
                  <div key={link.name}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-medium text-[#ccc]"
                      onClick={() => setIsMobileServicesOpen((open) => !open)}
                    >
                      <span className={location.pathname.includes("/services") ? "text-purple-300" : ""}>
                        Services
                      </span>
                      <svg className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {isMobileServicesOpen && (
                      <div className="ml-3 border-l border-white/10 pl-3">
                        <Link to="/services" onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-[#bbb] hover:bg-white/5 hover:text-white">
                          All Services
                        </Link>
                        {servicesLinks.map((service) => (
                          <Link key={service.name} to={service.path} onClick={closeMobileMenu} className="block rounded-lg px-3 py-2 text-sm text-[#bbb] hover:bg-white/5 hover:text-white">
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`rounded-lg px-3 py-3 font-medium ${location.pathname === link.path ? "text-purple-300" : "text-[#ccc]"}`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            <Link to="/contact" onClick={closeMobileMenu} className="mt-4 block rounded-lg bg-[#6c5ce7] px-4 py-3 text-center font-semibold text-white">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
