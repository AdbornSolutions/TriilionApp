import { useState, useEffect, useRef } from 'react';

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

    const counterNode = counterRef.current;

    if (counterNode) {
      observer.observe(counterNode);
    }

    return () => {
      if (counterNode) {
        observer.unobserve(counterNode);
      }
    };
  }, [end, hasAnimated]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
};

const StatsBar = () => {
  const stats = [
    { label: 'Active Clients', value: 150, suffix: '+' },
    { label: 'Project Done', value: 80, suffix: '+' },
    { label: 'Team Advisors', value: 15, suffix: '+' },
    { label: 'Glorious Years', value: 6, suffix: '+' },
  ];

  return (
    <div className="w-full py-8 px-4" style={{ background: '#f8f8f8' }}>
      <div
        className="max-w-6xl mx-auto relative grid grid-cols-2 gap-y-8 overflow-hidden md:grid-cols-4"
        style={{
          background: '#7c3aed',
          borderRadius: '0px 19px 0px 19px',
          padding: '28px clamp(16px, 5vw, 40px)',
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
            className={`relative z-10 px-2 text-center ${
              i % 2 === 0 ? 'border-r border-white/20 md:border-r' : ''
            } ${i < stats.length - 1 ? 'md:border-r md:border-white/20' : 'md:border-r-0'}`}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {stat.label}
            </p>
            <p className="text-3xl font-bold text-white sm:text-4xl">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
