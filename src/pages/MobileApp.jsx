import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import heroBg from '../assets/hero section/about-services-blog-contactus pages/ea708e963f94370a51861237163c2b9c4513b203.jpg';
import { services } from '../data/data.jsx';
import OurProcess from '../assets/Frame 121.png';
import TestimonialsSlider from '../components/TestimonialsSection.jsx';
import TeamImg from '../assets/team.png';
import iosIcon from '../assets/App/expertise/ios.png';
import androidIcon from '../assets/App/expertise/android.png';
import crossIcon from '../assets/App/expertise/cross.png';
import customIcon from '../assets/App/expertise/custom.png';
import businessIcon from '../assets/App/expertise/buisness.png';
import uiuxIcon from '../assets/App/expertise/uiux.png'; // add this icon if available
import increaseIcon from '../assets/Digital marketing/tangible/increase.png';
import conversionIcon from '../assets/Digital marketing/tangible/conversion.png';
import loyaltyIcon from '../assets/Digital marketing/tangible/loyalty.png'; // add if available
import teamIcon from '../assets/App/Why us/team.png';
import techIcon from '../assets/App/Why us/latest-tech.png';
import supportIcon from '../assets/App/Why us/support.png';
import customSolIcon from '../assets/App/Why us/custom.png'; // add if available

/* ─── Eyebrow label ─── */
const Eyebrow = ({ text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, justifyContent: 'center' }}>
    <span style={{ display: 'block', width: 18, height: 1.5, background: '#7c3aed' }} />
    <p style={{ color: '#7c3aed', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
      {text}
    </p>
    <span style={{ display: 'block', width: 18, height: 1.5, background: '#7c3aed' }} />
  </div>
);

/* ─── data ─── */
const digitalServices = [
  {
    icon: androidIcon,
    title: 'Android App Development',
    desc: 'High-performance native Android solutions built with Kotlin and Java for ultimate speed and hardware integration.',
    points: ['Kotlin/Java Development', 'Google Play Publishing', 'Device Optimization'],
  },
  {
    icon: iosIcon,
    title: 'iOS App Development',
    desc: 'Premium iOS experiences for Apple devices using Swift, ensuring smooth performance and flawless user interfaces.',
    points: ['Swift Development', 'App Store Optimization', 'iOS Integration'],
  },
  {
    icon: crossIcon,
    title: 'Cross-Platform Development',
    desc: 'Versatile apps for both iOS and Android using Flutter or React Native to reduce cost and time to market.',
    points: ['React Native', 'Flutter', 'Code Reusability'],
  },
  {
    icon: customIcon,
    title: 'Custom App Development',
    desc: 'Tailored apps built for your specific needs, integrating unique features that give you a competitive edge.',
    points: ['Custom Features', 'Scalable Architecture', 'Business Integration'],
  },
  {
    icon: businessIcon,
    title: 'Business App Development',
    desc: 'Strategic internal tools and enterprise solutions to automate and scale your business operations seamlessly.',
    points: ['Workflow Automation', 'Data Management', 'Enterprise Security'],
  },
  {
    icon: uiuxIcon || customIcon,
    title: 'UI/UX Design',
    desc: 'Intuitive, engaging, and human-centered design systems that ensure your app is a joy to use.',
    points: ['User Research', 'Wireframing & Prototyping', 'Design Systems'],
  },
];

const stats = [
  { value: '60%', label: 'Increase customer engagement', bg: '#8A38F5', color: '#fff' },
  { value: '45%', label: 'Boost sales', bg: '#fff', color: '#7c3aed' },
  { value: '65%', label: 'Increase brand visibility', bg: '#fff', color: '#7c3aed' },
  { value: '40%', label: 'Improve business efficiency', bg: '#2b064b', color: '#fff' },
];

const benefits = [
  {
    icon: increaseIcon,
    title: 'Increase in Customer Engagement',
    desc: 'Mobile apps improve customer interaction and engagement.',
  },
  {
    icon: conversionIcon,
    title: 'Increase in Sales',
    desc: 'Businesses can see 30% to 40% growth in sales after launching a mobile app.',
  },
  {
    icon: loyaltyIcon || conversionIcon,
    title: 'Improvement in Customer Loyalty',
    desc: 'Mobile apps help improve customer retention and loyalty.',
  },
];

const whyUs = [
  {
    icon: teamIcon,
    title: 'Experienced Team',
    desc: 'Over a decade of collective experience in building world-class digital products.',
  },
  {
    icon: customSolIcon || customIcon,
    title: 'Custom Solutions',
    desc: 'No templates. We build bespoke software designed specifically for your goals.',
  },
  {
    icon: techIcon,
    title: 'Latest Tech',
    desc: 'We use modern stacks like Flutter, React Native, and Swift to stay ahead.',
  },
  {
    icon: supportIcon,
    title: 'Dedicated Support',
    desc: 'We provide ongoing updates and post-launch scaling and support.',
  },
];

/* ─── Service Card ─── */
const ServiceCard = ({ icon, title, desc, points }) => (
  <div
    style={{
      background: '#fff',
      border: '1px solid #ede9fe',
      borderRadius: 16,
      padding: '28px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxShadow: '0 2px 16px 0 rgba(124,58,237,0.06)',
      transition: 'box-shadow 0.2s, transform 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(124,58,237,0.13)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = '0 2px 16px 0 rgba(124,58,237,0.06)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <div style={{
      width: 56, height: 56, borderRadius: 12,
      background: '#f5f3ff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '8px',
    }}>
      <img src={icon} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1e1b4b' }}>{title}</h3>
    <p style={{ margin: 0, fontSize: 13.5, color: '#6b7280', lineHeight: 1.6 }}>{desc}</p>
    <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
      {points.map((pt, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#374151' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#7c3aed', flexShrink: 0, display: 'inline-block' }} />
          {pt}
        </li>
      ))}
    </ul>
  </div>
);

/* ─── Stat Box ─── */
const StatBox = ({ value, label, bg, color }) => (
  <div style={{
    borderRadius: 16,
    padding: '26px 28px',
    background: bg,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    boxShadow: bg === '#fff' ? '0 2px 16px rgba(124,58,237,0.08)' : '0 10px 30px rgba(0,0,0,0.12)',
    border: bg === '#fff' ? '1px solid #ede9fe' : 'none',
  }}>
    <span style={{ fontSize: 34, fontWeight: 800, color: color }}>{value}</span>
    <span style={{ fontSize: 13, color: bg === '#fff' ? '#6b7280' : 'rgba(255,255,255,0.8)' }}>{label}</span>
  </div>
);

/* ─── Benefit Row ─── */
const BenefitRow = ({ icon, title, desc }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
    <div style={{
      width: 48, height: 48, borderRadius: 10,
      background: '#f5f3ff', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '8px',
    }}>
      <img src={icon} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
    <div>
      <h4 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 700, color: '#1e1b4b' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: 13.5, color: '#6b7280', lineHeight: 1.6 }}>{desc}</p>
    </div>
  </div>
);

/* ─── Why Us Card ─── */
const WhyCard = ({ icon, title, desc }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12 }}>
    <div style={{
      width: 60, height: 60, borderRadius: 14,
      background: '#f5f3ff', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '10px',
    }}>
      <img src={icon} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
    <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#1e1b4b' }}>{title}</h4>
    <p style={{ margin: 0, fontSize: 13.5, color: '#6b7280', lineHeight: 1.6 }}>{desc}</p>
  </div>
);

/* ════════════════════════════════════════════════ */
const MobileApp = () => {
  const service = services.find(s => s.id === 'app-development');

  return (
    <MainLayout>
      {/* ── Hero ── */}
      <HeroSection
        title="Mobile App Development"
        backgroundImage={heroBg}
        ctaText="Get Started"
        ctaLink="/contact"
      />

      {/* ══════════════════════════════════════
          1. OUR APP DEVELOPMENT SERVICES
      ══════════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <Eyebrow text="Expertise" />
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: '#1e1b4b', margin: '0 0 12px' }}>
              Our Mobile app Development Services
            </h2>
            <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 560, margin: '0 auto' }}>
              We leverage cutting-edge technologies to build apps that resonate with your users and drive business value.
            </p>
          </div>

          {/* 3-col grid — 6 cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: 24,
          }}>
            {digitalServices.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. BENEFITS / STATS SECTION
      ══════════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: '#faf9ff' }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }}>
          {/* LEFT — 2x2 Stat Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <div style={{ marginTop: -20 }}><StatBox {...stats[0]} /></div>
            <div style={{ marginTop: 3 }}><StatBox {...stats[1]} /></div>
            <div style={{ marginTop: -20 }}><StatBox {...stats[2]} /></div>
            <div style={{ marginTop: 1 }}><StatBox {...stats[3]} /></div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1e1b4b', margin: '0 0 14px', lineHeight: 1.25 }}>
              Benefits of ERP Software
            </h2>
            <p style={{ fontSize: 14.5, color: '#6b7280', lineHeight: 1.7, margin: '0 0 32px' }}>
              Mobile apps increase customer engagement, improve brand visibility, and create new revenue streams for your business.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {benefits.map((b, i) => (
                <BenefitRow key={i} {...b} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. OUR WORKING PROCESS
      ══════════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <Eyebrow text="Work Process" />
          <h2 style={{ fontSize: 34, fontWeight: 800, color: '#1e1b4b', margin: '0 0 12px' }}>
            Our Working Process
          </h2>
        </div>
        <div className="w-full mt-3">
          <img
            src={OurProcess}
            alt="Our Working Process"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. WHY CHOOSE US — 4-column layout (matching screenshot)
      ══════════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: '#faf9ff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1e1b4b', margin: '0 0 12px', lineHeight: 1.25 }}>
              Why Choose{' '}
              <span style={{ color: '#7c3aed' }}>Trillion Apps Technology</span>?
            </h2>
            <p style={{ fontSize: 14.5, color: '#6b7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              We don't just build websites, we build high-performance digital tools that meet the highest industry standards for success.
            </p>
          </div>

          {/* 4-column grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 40,
          }}>
            {whyUs.map((w, i) => <WhyCard key={i} {...w} />)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. TESTIMONIALS
      ══════════════════════════════════════ */}
      <section style={{ background: '#fff' }}>
        <TestimonialsSlider />
      </section>
    </MainLayout>
  );
};

export default MobileApp;