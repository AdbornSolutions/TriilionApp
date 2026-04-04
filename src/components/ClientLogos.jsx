import logo1 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.29-PM-1-e1692795255896 1.png';
import logo2 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.29-PM-e1692794255684 1.png';
import logo3 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.30-PM-e1692795194443 1.png';
import logo4 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.31-PM-2-e1692794545714 1.png';
import logo5 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.33-PM-e1692795093316 1.png';
import logo6 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.34-PM-1-e1692794981643 1.png';
import logo7 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.34-PM-3 1.png';
import logo8 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.35-PM-1-e1692795156577 1.png';
import logo9 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.35-PM-e1692794374252 1.png';
import logo10 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.36-PM-1-e1692794346474 1.png';
import logo11 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.36-PM-e1692794300278 1.png';

const ClientLogos = () => {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-center text-gray-500 font-semibold mb-8">
          TRUSTED BY COMPANIES WORLDWIDE
        </p>

        {/* Marquee Wrapper */}
        <div className="relative overflow-hidden">
          
          {/* Marquee Track */}
          <div className="flex space-x-12 animate-marquee">

            {/* Logos (Original Colors - No Hover / No Grayscale) */}
            {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11,
              logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`client-${index}`}
                className="h-12 w-auto object-contain flex-shrink-0"
              />
            ))}

          </div>

          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
