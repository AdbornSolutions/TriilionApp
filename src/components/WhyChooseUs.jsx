import { whyChooseUs } from '../data/data.jsx';
import whyChooseUsImg from '../assets/All/Group 14.png';
import { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBullets, setAnimatedBullets] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate bullets one by one
          whyChooseUs.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedBullets(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text Content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2" style={{ marginBottom: 12 }}>
              <span style={{ display: 'block', width: 18, height: 1, background: '#9333ea' }} />
              <p style={{ color: '#9333ea', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em' }}>
                Why Choose Us
              </p>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: 30,
                fontWeight: 800,
                color: '#0f0a1e',
                lineHeight: 1.3,
                marginBottom: 18,
              }}
            >
              Work with a Dedicated<br />Tech Company
            </h2>

            {/* Description */}
            <p
              style={{
                color: '#6b7280',
                fontSize: 14,
                lineHeight: 1.75,
                marginBottom: 28,
              }}
            >
              From Digital Marketing to Web Development And From Mobile
              App Development To ERP Development, our team of
              Professionals are true experts in their field.
            </p>

            {/* Checklist */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {whyChooseUs.map((item, index) => (
                <li 
                  key={index} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 12,
                    opacity: animatedBullets.includes(index) ? 1 : 0,
                    transform: animatedBullets.includes(index) ? 'translateX(0)' : 'translateX(-30px)',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Purple circle check icon */}
                  <span
                    style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #9333ea)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path
                        d="M2 5.5l2.5 2.5L9 3"
                        stroke="white"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span style={{ color: '#374151', fontSize: 14, fontWeight: 500 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Image */}
          <div 
            ref={imageRef}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(80px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <img
              src={whyChooseUsImg}
              alt="Why Choose Us"
              style={{ width: '100%', maxWidth: 500, objectFit: 'contain' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;