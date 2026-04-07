import { Link } from "react-router-dom";
import { services } from "../data/data";

import card1 from "../assets/All/SERVICES/Rectangle 10 (4).png";
import card2 from "../assets/All/SERVICES/Rectangle 12 (4).png";
import card3 from "../assets/All/SERVICES/Rectangle 11.png";

import dottedBg from "../assets/All/doted bg.png";
import dottedBg2 from "../assets/All/doted bg2.png";
import ctaImage from "../assets/All/homepage banner section/0482fa4194a6a0b4b1efd66f8e7ba6ac51406b0e.jpg";
import circleImage from "../assets/All/circle.jpg";

const ServicesSection = () => {
  return (
    <>
      <section className="relative">

        {/* TOP LIGHT BACKGROUND */}
        <div className="bg-gray-100 h-56"></div>

        {/* FLOATING CARDS */}
<div className="absolute left-0 right-0 top-1 z-20">
  <div className="max-w-5xl mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">

      {[card1, card2, card3].map((img, i) => (
        <div
          key={i}
          className="group"
          style={{
            borderRadius: 0,
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          {/* Image container */}
          <div 
            className="hover-container"
            style={{ position: 'relative' }}
            onMouseEnter={e => {
              const container = e.currentTarget;
              const badgeBg = container.querySelector('.badge-hover-bg');
              const titleBg = container.querySelector('.title-hover-bg');
              const numberBadge = container.querySelector('.number-badge');
              if (badgeBg) badgeBg.style.top = '0';
              if (titleBg) titleBg.style.bottom = '0';
              if (numberBadge) numberBadge.style.color = '#6428cbff';
            }}
            onMouseLeave={e => {
              const container = e.currentTarget;
              const badgeBg = container.querySelector('.badge-hover-bg');
              const titleBg = container.querySelector('.title-hover-bg');
              const numberBadge = container.querySelector('.number-badge');
              if (badgeBg) badgeBg.style.top = '100%';
              if (titleBg) titleBg.style.bottom = '100%';
              if (numberBadge) numberBadge.style.color = '#fff';
            }}
          >
            <img
              src={img}
              style={{
                width: '100%',
                height: 220,
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Number badge — bottom right corner of image */}
            <div
              className="number-badge relative overflow-hidden transition-colors duration-500"
              style={{
                position: 'absolute',
                bottom: 21,
                right: 30,
                background: '#7c3aed',
                color: '#fff',
                width: 38,
                height: 38,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 700,
                zIndex: 2,
              }}
            >
              <span
                className="badge-hover-bg absolute left-0 w-full h-full transition-all duration-500"
                style={{
                  top: '100%',
                  background: '#fcfcfcff',
                  zIndex: -1,
                }}
              />
              {i + 1}
            </div>

            {/* Title label — centered, auto width, floating over bottom of image */}
            <div
              className="relative overflow-hidden"
              style={{
                position: 'absolute',
                bottom: -20,
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#fff',
                color: '#0f0a1e',
                fontWeight: 700,
                fontSize: 14,
                padding: '10px 59px',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 12px rgba(0,0,0,0.20)',
                zIndex: 1,
              }}
            >
              <span
                className="title-hover-bg absolute left-0 w-full h-full transition-all duration-500"
                style={{
                  bottom: '100%',
                  background: '#7c3aed',
                  zIndex: -1,
                }}
              />
              {['Innovative Solutions', 'Global Connectivity ', 'Access to Information'][i]}
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</div>

        {/* PURPLE SECTION */}
        <div className="relative bg-[#1a0f2e] pt-40 pb-24 overflow-hidden">

          {/* dotted bg layer 1 */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url(${dottedBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: 'brightness(0) invert(1)',
            }}
          ></div>

          {/* dotted bg layer 2 */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `url(${dottedBg2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: 'brightness(0) invert(1)',
            }}
          ></div>

          <div className="relative max-w-6xl mx-auto px-6">

            {/* heading row */}
            <div className="grid md:grid-cols-2 gap-12 text-white mb-16">

              <div>
                <p className="text-purple-400 text-sm mb-2">
                  What We're Offering
                </p>

                <h2 className="text-4xl font-bold leading-snug">
                  Dealing in all Professional <br /> IT Services
                </h2>
              </div>

              <div className="text-gray-300 text-sm leading-relaxed">
                We offers a full-cycle software development services that meet
                varied business requirements from IT strategy consulting to the
                end-to-end development of scalable solutions.
              </div>

            </div>

           <div className="flex justify-center mt-16">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

    {services.map((service) => (
      <div
        key={service.id}
        className="relative text-center pt-14 pb-9 px-6"
        style={{
          background: '#1a0f2e',
          zIndex: 0,
        }}
        onMouseEnter={e => {
          const bgEl = e.currentTarget.querySelector('.service-hover-bg');
          if (bgEl) {
            bgEl.style.transform = 'scaleX(1) scaleY(1)';
            bgEl.style.opacity = '1';
          }
          const titleEl = e.currentTarget.querySelector('h3');
          if (titleEl) titleEl.style.color = '#000000';
          const descEl = e.currentTarget.querySelector('p');
          if (descEl) descEl.style.color = '#000000';
          const iconEl = e.currentTarget.querySelector('.icon-circle');
          if (iconEl) {
            iconEl.style.background = '#ffffff';
            iconEl.style.borderColor = '#000000';
            iconEl.style.color = '#000000';
          }
        }}
        onMouseLeave={e => {
          const bgEl = e.currentTarget.querySelector('.service-hover-bg');
          if (bgEl) {
            bgEl.style.transform = 'scaleX(0) scaleY(0)';
            bgEl.style.opacity = '0';
          }
          const titleEl = e.currentTarget.querySelector('h3');
          if (titleEl) titleEl.style.color = '#ffffff';
          const descEl = e.currentTarget.querySelector('p');
          if (descEl) descEl.style.color = '#9ca3af';
          const iconEl = e.currentTarget.querySelector('.icon-circle');
          if (iconEl) {
            iconEl.style.background = '#1a0f2e';
            iconEl.style.borderColor = '#a855f7';
            iconEl.style.color = '#c084fc';
          }
        }}
      >
        <span
          className="service-hover-bg absolute inset-0 w-full h-full transition-all duration-500 ease-out"
          style={{
            background: '#ffffff',
            zIndex: -1,
            transform: 'scaleX(0) scaleY(0)',
            transformOrigin: 'bottom left',
            opacity: 0,
          }}
        />

        {/* Icon Circle */}
        <div className="icon-circle absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#1a0f2e] border border-purple-500 rounded-full flex items-center justify-center text-purple-400 text-3xl shadow-lg transition-all duration-500" style={{ zIndex: 2 }}>
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-white text-sm font-semibold mb-2 mt-4">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed">
          {service.description}
        </p>

      </div>
    ))}

  </div>
</div>

          </div>

        </div>

      </section>

      {/* CTA Section - Full Width */}
     <section className="w-full py-12 px-4 -mt-12">
  <div className="max-w-7xl mx-auto">

    <div
      className="relative overflow-hidden "
      style={{
        backgroundImage: `url(${ctaImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(110,77,150,0.9) 0%, rgba(184,130,252,0.9) 50%, rgba(110,77,150,0.9) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-12 py-10">

        {/* Left Circle Image */}
        <div className="hidden md:flex items-center">
          <img
            src={circleImage}
            alt="team"
            className="w-40 h-40 rounded-full object-cover border-4 border-white/30"
          />
        </div>

        {/* Center Text */}
        <div className="text-white max-w-xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We’re Ready Develop Your Site!
          </h2>

          <ul className="space-y-3">

            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </span>
              <span>IT solutions are created by top experts</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </span>
              <span>Receive free consultation for any kind of IT solutions</span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                ✓
              </span>
              <span>Support 24/7 for partners during the process.</span>
            </li>

          </ul>
        </div>

        {/* Right Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="relative inline-block px-6 py-3 font-semibold hover:shadow-lg overflow-hidden"
            style={{
              background: '#ffffff',
              color: '#1f2937',
              textDecoration: 'none',
              zIndex: 1,
            }}
            onMouseEnter={e => {
              const bgEl = e.currentTarget.querySelector('.btn-hover-bg');
              if (bgEl) bgEl.style.top = '0';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              const bgEl = e.currentTarget.querySelector('.btn-hover-bg');
              if (bgEl) bgEl.style.top = '100%';
              e.currentTarget.style.color = '#1f2937';
            }}
          >
            <span
              className="btn-hover-bg absolute left-0 w-full h-full transition-all duration-500"
              style={{
                top: '100%',
                background: '#7c3aed',
                zIndex: -1,
              }}
            />
            Learn More
          </Link>
        </div>

      </div>

    </div>

  </div>
</section>
    </>
  );
};

export default ServicesSection;