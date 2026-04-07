import { Link } from 'react-router-dom';
import newImage from '../assets/Group 1.png';
import StatsBar from './StatsBar';

const AboutSection = () => {

  return (
    <section className="bg-white overflow-hidden">
      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT — Single Image */}
          <div className="flex items-center justify-center">
            <img
              src={newImage}
              alt="About Company"
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>

          {/* RIGHT — Text Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="block w-6 h-px" style={{ background: '#6366f1' }} />
              <p className="text-sm font-bold uppercase tracking-wide" style={{ color: '#6366f1' }}>
                About Company
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We're Partner of Your<br />Innovations
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed text-base">
              Where innovation meets inspiration! Whether you're a tech enthusiast, a budding
              entrepreneur, or simply curious about the digital frontier, our firm is your go-to
              destination for all things which are tech-related. Our team of passionate and
              knowledgeable tech experts is dedicated to providing you with an unmatched user
              experience.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-8">
              {[
                'Bringing new IT solutions to the market',
                'To be included the list of the best 100 IT companies',
                'Our company have 300 IT senior professionals',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #9333ea)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5L8 2.5"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Learn More — outlined with bottom-to-top hover */}
            <div>
              <Link
                to="/about"
                className="inline-block text-base font-semibold px-8 py-3.5 rounded-lg hover:shadow-lg relative overflow-hidden"
                style={{
                  border: '2px solid #6366f1',
                  color: '#6366f1',
                  textDecoration: 'none',
                  background: '#ffffff',
                  zIndex: 1,
                }}
                onMouseEnter={e => {
                  const beforeEl = e.currentTarget.querySelector('.hover-bg');
                  if (beforeEl) beforeEl.style.top = '0';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  const beforeEl = e.currentTarget.querySelector('.hover-bg');
                  if (beforeEl) beforeEl.style.top = '100%';
                  e.currentTarget.style.color = '#6366f1';
                }}
              >
                <span
                  className="hover-bg absolute left-0 w-full h-full transition-all duration-500"
                  style={{
                    top: '100%',
                    background: '#6366f1',
                    zIndex: -1,
                  }}
                />
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <StatsBar />
    </section>
  );
};

export default AboutSection;