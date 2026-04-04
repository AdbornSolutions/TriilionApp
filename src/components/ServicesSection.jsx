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
        <div className="absolute left-0 right-0 top-24 z-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">

              {[card1, card2, card3].map((img, i) => (
                <div
                  key={i}
                  className="bg-white shadow-2xl rounded overflow-hidden relative"
                >
                  <img
                    src={img}
                    className="w-full h-48 object-cover"
                  />

                  {/* number badge */}
                  <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 text-sm">
                    {i + 1}
                  </div>

                  <div className="p-3 text-center font-semibold">
                    {[
                      "Innovative Solutions",
                      "Global Connectivity",
                      "Access to Information",
                    ][i]}
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
        className="relative bg-[#1a0f2e] text-center pt-14 pb-8 px-6 hover:bg-[#2a1a4e] transition-all duration-300"
      >

        {/* Icon Circle */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#1a0f2e] border border-purple-500 rounded-full flex items-center justify-center text-purple-400 text-3xl shadow-lg">
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
            className="bg-white text-gray-800 px-6 py-3 font-semibold hover:shadow-lg transition"
          >
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