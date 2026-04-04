// FooterCTA.jsx
import React from "react";
import footerBanner from '../assets/All/1st footer banner/Frame 89.png';

const FooterCTA = () => {
  return (
    <section 
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${footerBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* Content */}
      <div className="relative z-10 py-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <p className="text-white text-lg mb-4">We’re here to help to grow your business.</p>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6">
          Looking for the Best IT Business Solutions?
        </h1>
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default FooterCTA;