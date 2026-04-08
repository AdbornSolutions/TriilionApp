import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import heroBg from '../assets/hero section/about-services-blog-contactus pages/ea708e963f94370a51861237163c2b9c4513b203.jpg';
import { services } from '../data/data.jsx';
import OurProcess from '../assets/Frame 121.png';
import TestimonialsSlider from '../components/TestimonialsSection.jsx';
import TeamImg from '../assets/team.png';
import seoIcon from '../assets/Digital marketing/expertise/seo.png';
import socialIcon from '../assets/Digital marketing/expertise/social.png';
import googleAdsIcon from '../assets/Digital marketing/expertise/google-ads.png';
import semIcon from '../assets/Digital marketing/expertise/sem.png';
import contentIcon from '../assets/Digital marketing/expertise/content.png';
import brandIcon from '../assets/Digital marketing/expertise/brand.png';
import increaseIcon from '../assets/Digital marketing/tangible/increase.png';
import leadsIcon from '../assets/Digital marketing/tangible/general.png';
import conversionIcon from '../assets/Digital marketing/tangible/conversion.png';
import teamIcon from '../assets/Digital marketing/why us/team.png';
import resultIcon from '../assets/Digital marketing/why us/result.png';
import supportIcon from '../assets/Digital marketing/why us/cus-support.png';

/* ─── icon helpers (inline SVG so no extra dep needed) ─── */
const Icon = ({ d, size = 30, color = '#7c3aed' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

/* ─── data ─── */
const digitalServices = [
  {
    icon: seoIcon,
    title: 'SEO',
    desc: 'Gaining search engine results to bring sustainable organic growth to your doorstep.',
    points: ['Keyword Research', 'On-page Optimization', 'Technical SEO Audit'],
  },
  {
    icon: socialIcon,
    title: 'Social Media Marketing',
    desc: 'Building vibrant communities and engaging content that converts followers into fans.',
    points: ['Community Building', 'Content Strategy', 'Influencer Outreach'],
  },
  {
    icon: googleAdsIcon,
    title: 'Google Ads',
    desc: 'Precise targeting and ROI-focused PPC campaigns that capture high-intent traffic.',
    points: ['Search & Display Ads', 'Remarketing Funnels', 'ROI Monitoring'],
  },
  {
    icon: semIcon,
    title: 'SEM',
    desc: 'Comprehensive search engine visibility strategies combining paid and organic efforts.',
    points: ['Competitor Analysis', 'Bid Management', 'Conversion Optimization'],
  },
  {
    icon: contentIcon,
    title: 'Content Marketing',
    desc: 'Storytelling that resonates. High-quality content strategy to establish authority.',
    points: ['Blog Management', 'Video Marketing', 'E-books & Whitepapers'],
  },
  {
    icon: brandIcon,
    title: 'Brand Promotion',
    desc: 'Identity & Reputation management. Making your brand a household name online.',
    points: ['Brand Identity', 'PR Management', 'Digital PR'],
  },
];

const benefits = [
  {
    icon: increaseIcon,
    title: 'Increase Website Traffic',
    desc: 'Drive high-quality organic and paid traffic to your site.',
  },
  {
    icon: leadsIcon,
    title: 'Generate More Leads',
    desc: 'Convert visitors into loyal customers through targeted funnels.',
  },
  {
    icon: conversionIcon,
    title: 'Higher Conversion Rates',
    desc: 'Optimise every touchpoint to maximise your business revenue.',
  },
];

const whyUs = [
  {
    icon: teamIcon,
    title: 'Experienced Team',
    desc: 'Our specialists bring years of expertise in global digital marketing trends.',
  },
  {
    icon: resultIcon,
    title: 'Result-Oriented',
    desc: "We don't focus on vanity metrics; we focus on your bottom line growth.",
  },
  {
    icon: supportIcon,
    title: '24/7 Dedicated Support',
    desc: 'A dedicated account manager for your project, always a call away.',
  },
];

const stats = [
  { value: '10x', label: 'Traffic Increase', light: true, textColor: '#fff' },
  { value: '2.5x', label: 'Revenue Growth', dark: false },
  { value: '85%', label: 'More Qualified Leads', dark: false },
  { value: '99%', label: 'Client Retention', dark: true },
];

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

/* ─── Service Card ─── */
const ServiceCard = ({ icon, title, desc, points }) => (
  <div style={{
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
    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(124,58,237,0.13)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 16px 0 rgba(124,58,237,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
const StatBox = ({ value, label, variant, dark, light, textColor }) => {
  let bg = "#fff";
  let color = "#7c3aed";

  if (variant === "gradient" || dark === true) {
    bg = "#2b064bff";
    color = "#fff";
  }
if (variant === "light" || light === true) {
    bg = "#8A38F5";
    color = textColor || "#fff";
    textColor =  "#fff";
  }
  if (variant === "dark") {
    bg = "#2b064bff";
    color = "#fff";
  }

  return (
    <div
      style={{
        borderRadius: 16,
        padding: "26px 28px",
        background: bg,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
      }}
    >
      <span
        style={{
          fontSize: 34,
          fontWeight: 800,
          color: color,
        }}
      >
        {value}
      </span>

      <span
        style={{
          fontSize: 13,
          color:
            variant === "gradient" 
              ?  "#ffffffff"
              : "#83868bff",
        }}
      >
        {label}
      </span>
    </div>
  );
};


/* ─── Benefit Row ─── */
const BenefitRow = ({ icon, title, desc }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
    <div style={{
      width: 56, height: 56, borderRadius: 12,
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

/* ─── Why Us Row ─── */
const WhyRow = ({ icon, title, desc }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
    <div style={{
      width: 56, height: 56, borderRadius: 12,
      background: '#f5f3ff', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '8px',
    }}>
      <img src={icon} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
    <div>
      <h4 style={{ margin: '0 0 5px', fontSize: 15, fontWeight: 700, color: '#1e1b4b' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: 13.5, color: '#6b7280', lineHeight: 1.65 }}>{desc}</p>
    </div>
  </div>
);

/* ════════════════════════════════════════════════ */
const DigitalMarketing = () => {
  const service = services.find(s => s.id === 'digital-marketing');

  return (
    <MainLayout>
      {/* ── Hero ── */}
      <HeroSection
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={heroBg}
        ctaText="Get Started"
        ctaLink="/contact"
      />

      {/* ══════════════════════════════════════
          1. OUR DIGITAL MARKETING SERVICES
      ══════════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <Eyebrow text="Expertise" />
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: '#1e1b4b', margin: '0 0 12px' }}>
              Our Digital Marketing Services
            </h2>
            <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 520, margin: '0 auto' }}>
              Comprehensive solutions tailored to elevate your online presence and dominate your niche.
            </p>
          </div>

          {/* 3-col grid */}
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
          2. TANGIBLE BENEFITS
      ══════════════════════════════════════ */}
    <section style={{ padding: "80px 0", background: "#faf9ff" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* LEFT STATS - Zig Zag Pattern */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
            }}
          >
            <div style={{ marginTop: -20 }}>
              <StatBox {...stats[0]} />
            </div>

            <div style={{ marginTop: 3 }}><StatBox {...stats[1]} /></div>

            <div style={{ marginTop: -20 }}><StatBox {...stats[2]} /></div>

            <div style={{ marginTop: 1 }}>
              <StatBox {...stats[3]} />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: "#1e1b4b",
                margin: "0 0 14px",
                lineHeight: 1.25,
              }}
            >
              Tangible Benefits for Your Business Growth
            </h2>

            <p
              style={{
                fontSize: 14.5,
                color: "#6b7280",
                lineHeight: 1.7,
                margin: "0 0 32px",
              }}
            >
              Experience tangible growth with our data-backed marketing
              strategies. We don't just provide services; we provide results.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
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

        {/* Full-width process graphic */}
       <div className="w-full mt-3">
                 <img 
                   src={OurProcess} 
                   alt="Our Working Process" 
                   className="w-full h-auto"
                 />
               </div>
      </section>

      {/* ══════════════════════════════════════
          4. WHY CHOOSE US
      ══════════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: '#faf9ff' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 92,
          alignItems: 'center',
        }}>
          {/* LEFT text */}
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1e1b4b', margin: '0 0 8px', lineHeight: 1.25 }}>
              Why Choose{' '}
              <span style={{ color: '#7c3aed' }}>Trillion Apps Technology</span>?
            </h2>
            <p style={{ fontSize: 14.5, color: '#6b7280', margin: '0 0 36px', lineHeight: 1.7 }}>
              We're more than a digital agency — we're your growth partner.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {whyUs.map((w, i) => <WhyRow key={i} {...w} />)}
            </div>
          </div>

          {/* RIGHT image placeholder (team photo) */}
          <div style={{
            borderRadius: 20,
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
            height: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 40px rgba(124,58,237,0.12)',
          }}>
            <img
              src={TeamImg}
              alt="Our team"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
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

export default DigitalMarketing;