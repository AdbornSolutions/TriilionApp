import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/data.jsx";
import coreValueBg from "../assets/hero section/about-services-blog-contactus pages/our-core-value bg .png";
import heroBg from "../assets/All/homepage banner section/0482fa4194a6a0b4b1efd66f8e7ba6ac51406b0e.jpg";

const MainServicesSection = () => {

  const [selectedService, setSelectedService] = useState(services[0]);
  const navigate = useNavigate();

  return (
    <section className="relative py-24 bg-[#eeebf5] overflow-hidden">

      {/* dotted background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${coreValueBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-purple-600"></span>
            <p className="text-purple-600 text-xs font-semibold tracking-wider uppercase">
              our services
            </p>
          </div>

          <h2 className="text-4xl font-extrabold text-[#0f0a1e] leading-tight">
            We Offer a Wide <br />
            Variety of IT Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SERVICES */}
          <div className="flex flex-col gap-4">

            {services.map((service) => {

              const active = selectedService.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`flex items-center gap-4 px-6 py-4 text-left transition-all border rounded
                  ${active 
                    ? "border-purple-600 bg-white shadow-sm"
                    : "border-gray-200 bg-white hover:border-purple-300"
                  }`}
                >

                  {/* Icon */}
                  <div className="w-11 h-11 flex items-center justify-center border border-purple-200 rounded text-purple-600 text-xl">
                    {service.icon}
                  </div>

                  <span className="font-semibold text-[#0f0a1e] text-[15px]">
                    {service.title}
                  </span>

                </button>
              );
            })}

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Image */}
            <img
              src={heroBg}
              alt={selectedService.title}
              className="w-[95%] rounded-md object-cover mx-auto"
            />

            {/* INFO CARD + ARROW BUTTON WRAPPER */}
            <div
              className="absolute -bottom-6 right-12 w-[65%] group cursor-pointer"
              onMouseEnter={(e) => {
                // Info card hover effect
                e.currentTarget.querySelector('.hover-bg').style.top = '0';
                e.currentTarget.querySelector('h3').style.color = '#fff';
                e.currentTarget.querySelector('p').style.color = '#e5e7eb';
                // Arrow button hover effect
                e.currentTarget.querySelector('.arrow-btn').style.background = '#fff';
                e.currentTarget.querySelector('.arrow-btn svg').style.stroke = '#7c3aed';
              }}
              onMouseLeave={(e) => {
                // Info card leave effect
                e.currentTarget.querySelector('.hover-bg').style.top = '100%';
                e.currentTarget.querySelector('h3').style.color = '#0f0a1e';
                e.currentTarget.querySelector('p').style.color = '#6b7280';
                // Arrow button leave effect
                e.currentTarget.querySelector('.arrow-btn').style.background = '#7c3aed';
                e.currentTarget.querySelector('.arrow-btn svg').style.stroke = '#fff';
              }}
            >
              {/* INFO CARD */}
              <div 
                className="bg-white shadow-xl p-5 border-l-4 border-purple-600 relative overflow-hidden"
              >
                {/* Hover Background - slides from bottom to top */}
                <div
                  className="hover-bg absolute left-0 w-full h-full transition-all duration-500"
                  style={{
                    top: '100%',
                    background: '#7c3aed',
                    zIndex: 0,
                  }}
                />
                
                {/* Content - positioned above the hover background */}
                <div className="relative" style={{ zIndex: 1 }}>
                  <h3 className="font-bold text-[#0f0a1e] mb-1 transition-colors duration-500">
                    {selectedService.title}
                  </h3>
                  <p className="text-sm text-gray-500 transition-colors duration-500">
                    {selectedService.description}
                  </p>
                </div>
              </div>

              {/* Arrow Button */}
              <button
                onClick={() => navigate(`/services/${selectedService.id}`)}
                className="arrow-btn absolute -top-8 right-4 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-lg transition-all duration-500 z-10"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-500"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MainServicesSection;