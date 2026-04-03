import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import newImage from '../assets/Group 1.png';

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2000; // 2 seconds
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = end / steps;
          
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, hasAnimated]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const stats = [
    { label: 'Active Clients', value: 150, suffix: '+' },
    { label: 'Project Done', value: 80, suffix: '+' },
    { label: 'Team Advisors', value: 15, suffix: '+' },
    { label: 'Glorious Years', value: 6, suffix: '+' },
  ];

  return (
    <section className="bg-white overflow-hidden">
      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT — Single Image */}
          <div className="relative">
            <img
              src={newImage}
              alt="About Company"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* RIGHT — Text Content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-5 h-px" style={{ background: '#6366f1' }} />
              <p className="text-sm font-semibold" style={{ color: '#6366f1' }}>
                About Company
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
              We're Partner of Your<br />Innovations
            </h2>

            <p className="text-gray-500 mb-6 leading-relaxed text-sm">
              Where innovation meets inspiration! Whether you're a tech enthusiast, a budding
              entrepreneur, or simply curious about the digital frontier, our firm is your go-to
              destination for all things which are tech-related. Our team of passionate and
              knowledgeable tech experts is dedicated to providing you with an unmatched user
              experience.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {[
                'Bringing new IT solutions to the market',
                'To be included the list of the best 100 IT companies',
                'Our company have 300 IT senior professionals',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #9333ea)' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5L8 2.5"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Learn More — outlined */}
            <Link
              to="/about"
              className="inline-block text-sm font-semibold px-7 py-3 rounded-md transition-all duration-200"
              style={{
                border: '1.5px solid #d1d5db',
                color: '#1f2937',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#6366f1';
                e.currentTarget.style.color = '#6366f1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#d1d5db';
                e.currentTarget.style.color = '#1f2937';
              }}
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="w-full py-8 px-4" style={{ background: '#f8f8f8' }}>
        <div
          className="max-w-5xl mx-auto relative overflow-hidden"
          style={{
            background: '#7c3aed',
            borderRadius: 16,
            padding: '28px 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {/* Decorative diamond shapes */}
          {[
            { top: -20, left: -20, size: 60 },
            { bottom: -20, left: 20, size: 40 },
            { top: -15, right: 40, size: 35 },
            { bottom: -20, right: -10, size: 55 },
          ].map((d, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: d.size, height: d.size,
                background: 'rgba(255,255,255,0.12)',
                transform: 'rotate(45deg)',
                borderRadius: 6,
                top: d.top, bottom: d.bottom,
                left: d.left, right: d.right,
              }}
            />
          ))}

          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center relative z-10"
              style={i < stats.length - 1 ? {
                borderRight: '1px solid rgba(255,255,255,0.2)',
              } : {}}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {stat.label}
              </p>
              <p className="text-4xl font-bold text-white">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;