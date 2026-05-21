import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import heroBg from '../assets/hero section/about-services-blog-contactus pages/ea708e963f94370a51861237163c2b9c4513b203.jpg';
import { services } from '../data/data.jsx';
import OurProcess from '../assets/Frame 121.png';
import TestimonialsSlider from '../components/TestimonialsSection.jsx';
import TeamImg from '../assets/team.png';
import businessIcon from '../assets/Website/expertice/buisness.png';
import customDevIcon from '../assets/Website/expertice/custom dev.png';
import ecommerceIcon from '../assets/Website/expertice/e-comm.png';
import corporateIcon from '../assets/Website/expertice/corporate.png';
import responsiveIcon from '../assets/Website/expertice/responsive.png';
import redesignIcon from '../assets/Website/expertice/web design.png';
import adminIcon from '../assets/Website/expertice/admin.png';
import seoIcon from '../assets/Website/Why us/seo.png';
import increaseIcon from '../assets/Digital marketing/tangible/increase.png';
import leadsIcon from '../assets/Digital marketing/tangible/general.png';
import conversionIcon from '../assets/Digital marketing/tangible/conversion.png';
import modernIcon from '../assets/Website/Why us/mordern.png';
import fastIcon from '../assets/Website/Why us/fast.png';
import SecureIcon from '../assets/Website/Why us/secure.png';
import easyIcon from '../assets/Website/Why us/easy-manage.png';
import whyRightIcon from '../assets/Website/Why us/why right.png';
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
    icon: businessIcon,
    title: "Business Website",
    desc: "Professional websites that showcase your company and brand to the world.",
    points: ["Modern Design", "Brand Focused", "SEO Friendly"],
  },
  {
    icon: customDevIcon,
    title: "Custom Development",
    desc: "Tailored features and complex functionality built specifically for your needs.",
    points: ["Custom Features", "Advanced Logic", "Scalable Code"],
  },
  {
    icon: ecommerceIcon,
    title: "E-commerce Solutions",
    desc: "Online stores with secure payments and easy-to-manage product catalogs.",
    points: ["Secure Payments", "Cart System", "Product Management"],
  },
  {
    icon: corporateIcon,
    title: "Corporate Website",
    desc: "Professional and credible online presence for large-scale organizations.",
    points: ["Corporate Design", "High Performance", "Brand Authority"],
  },
  {
    icon: responsiveIcon,
    title: "Responsive Design",
    desc: "Perfect display on all devices from mobile phones to ultra-wide monitors.",
    points: ["Mobile First", "Cross Device", "Fast Loading"],
  },
  {
    icon: redesignIcon,
    title: "Website Redesign",
    desc: "Modern layouts and improved performance for existing legacy websites.",
    points: ["UI Upgrade", "Speed Optimization", "Modern UX"],
  },
  {
    icon: adminIcon,
    title: "Admin Dashboards",
    desc: "Easy-to-use control panels to manage your content and monitor performance.",
    points: ["Analytics Panel", "Content Control", "Business Insights"],
  },
  {
    icon: seoIcon,
    title: "SEO Integration",
    desc: "Built-in SEO best practices to improve your search engine rankings.",
    points: ["On-Page SEO", "Fast Loading", "Schema Markup"],
  },
];

const benefits = [
  {
    icon: increaseIcon,
    title: "Builds Strong First Impression",
    desc: "Your website is often the first interaction customers have with your business. A professional design builds trust.",
  },
  {
    icon: leadsIcon,
    title: "Increases Business Credibility",
    desc: "Customers trust businesses that have professional and well-designed websites.",
  },
  {
    icon: conversionIcon,
    title: "Improves Online Visibility",
    desc: "With SEO-friendly development your website can appear higher in Google search results.",
  },
];

const whyFeatures = [
  {
    icon: modernIcon,
    title: "Modern & Pro",
    desc: "Cutting-edge aesthetic designs.",
  },
  {
    icon: responsiveIcon,
    title: "Mobile-Friendly",
    desc: "Fully responsive layouts.",
  },
  {
    icon: fastIcon,
    title: "Fast Loading",
    desc: "Speed optimized code.",
  },
  {
    icon: seoIcon,
    title: "SEO-Friendly",
    desc: "Rank higher on Google.",
  },
  {
    icon: SecureIcon,
    title: "Secure & Reliable",
    desc: "Bank-grade security standards.",
  },
  {
    icon: easyIcon,
    title: "Easy to Manage",
    desc: "User-friendly CMS systems.",
  },
];

const stats = [
  { value: "75%", label: "Increase in Business Credibility", light: true },
  { value: "60%", label: "Increase in Online Visibility" },
  { value: "35%", label: "Increase in Sales" },
  { value: "50%", label: "Increase in Lead Generation", dark: true },
];
const FeatureItem = ({ icon, title, desc }) => (
  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
    
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: 12,
        background: "#f5f3ff",
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
      }}
    >
      <img src={icon} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>

    <div>
      <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#1e1b4b" }}>
        {title}
      </h4>

      <p
        style={{
          margin: 0,
          fontSize: 13.5,
          color: "#6b7280",
          lineHeight: 1.6,
        }}
      >
        {desc}
      </p>
    </div>
  </div>
);
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
const WebDevelopment = () => {
  const service = services.find(s => s.id === 'web-development');

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
              Our Web Development Services
            </h2>
            <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 520, margin: '0 auto' }}>
              Professional web development solutions to build your digital presence and drive business growth.
            </p>
          </div>

          {/* 4-col grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
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
              Benefits of Professional Web Development
            </h2>

            <p
              style={{
                fontSize: 14.5,
                color: "#6b7280",
                lineHeight: 1.7,
                margin: "0 0 32px",
              }}
            >
              A professional website builds credibility, attracts customers, and helps your business grow in the digital age.
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
      <section style={{ padding: "90px 0", background: "#faf9ff" }}>
  <div
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 24px",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 70,
      alignItems: "center",
    }}
  >

{/* LEFT CONTENT */}

<div>

<h2
style={{
fontSize: 34,
fontWeight: 800,
color: "#1e1b4b",
marginBottom: 12,
}}
>
Why Choose{" "}
<span style={{ color: "#7c3aed" }}>
Trillion Apps Technology
</span>
?
</h2>

<p
style={{
fontSize: 14.5,
color: "#6b7280",
marginBottom: 36,
lineHeight: 1.7,
maxWidth: 520,
}}
>
We don't just build websites; we build high-performance digital tools
that meet the highest industry standards for success.
</p>

<div
style={{
display: "grid",
gridTemplateColumns: "1fr 1fr",
gap: 26,
}}
>
{whyFeatures.map((f, i) => (
<FeatureItem key={i} {...f} />
))}
</div>

</div>

{/* RIGHT CARD */}

<div
style={{
background: "#f3f0ff",
borderRadius: 24,
padding: 30,
boxShadow: "0 20px 40px rgba(124,58,237,0.15)",
}}
>

<div
style={{
background: "#fff",
borderRadius: 18,
padding: "60px 40px",
textAlign: "center",
boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
}}
>

{/* ICON */}

<div
style={{
width: 70,
height: 70,
borderRadius: 12,
background: "#f5f3ff",
margin: "0 auto 20px",
display: "flex",
alignItems: "center",
justifyContent: "center",
padding: '12px',
}}
>
<img src={whyRightIcon} alt="Why Choose Us" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
</div>

<h3
style={{
fontSize: 20,
fontWeight: 700,
color: "#1e1b4b",
marginBottom: 12,
}}
>
Scalable Future-Ready
</h3>

<p
style={{
fontSize: 14,
color: "#6b7280",
lineHeight: 1.7,
maxWidth: 320,
margin: "0 auto 30px",
}}
>
Our architecture is built to grow with your business, ensuring your
investment remains valuable for years to come.
</p>

{/* BOTTOM LINES */}

<div
style={{
display: "flex",
justifyContent: "center",
gap: 14,
}}
>
<span style={{ width: 80, height: 4, background: "#8A38F5", borderRadius: 2 }} />
<span style={{ width: 80, height: 4, background: "#8A38F5", borderRadius: 2 }} />
<span style={{ width: 80, height: 4, background: "#8A38F5", borderRadius: 2 }} />
</div>

</div>
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

export default WebDevelopment;
