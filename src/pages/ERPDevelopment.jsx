import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import heroBg from '../assets/hero section/about-services-blog-contactus pages/ea708e963f94370a51861237163c2b9c4513b203.jpg';
import { services } from '../data/data.jsx';
import OurProcess from '../assets/Frame 121.png';
import TestimonialsSlider from '../components/TestimonialsSection.jsx';
import TeamImg from '../assets/team.png';
import customErpIcon from '../assets/ERP/Expertise/custom erp.png';
import inventoryIcon from '../assets/ERP/Expertise/inventry.png';
import billingIcon from '../assets/ERP/Expertise/bill.png';
import hrIcon from '../assets/ERP/Expertise/hr.png';
import salesIcon from '../assets/ERP/Expertise/sales.png';
import adminIcon from '../assets/ERP/Expertise/admin.png';
import cloudIcon from '../assets/ERP/Expertise/cloud.png';
import supportIcon from '../assets/ERP/Expertise/support.png';
import increaseIcon from '../assets/Digital marketing/tangible/increase.png';
import leadsIcon from '../assets/Digital marketing/tangible/general.png';
import conversionIcon from '../assets/Digital marketing/tangible/conversion.png';
import teamIcon from '../assets/ERP/Expertise/Margin.png';
import resultIcon from '../assets/Digital marketing/why us/result.png';
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
    icon: customErpIcon,
    title: "Custom ERP",
    desc: "Tailor-made solutions designed specifically for your unique business workflows.",
    points: ["Workflow Automation", "Custom Modules", "Business Integration"],
  },
  {
    icon: inventoryIcon,
    title: "Inventory",
    desc: "Real-time stock tracking, multi-warehouse management, and automated replenishment.",
    points: ["Stock Tracking", "Warehouse Management", "Auto Reorder"],
  },
  {
    icon: billingIcon,
    title: "Billing & Finance",
    desc: "Streamline invoicing, accounts payable, and financial reporting in one place.",
    points: ["Invoice Automation", "Expense Tracking", "Financial Reports"],
  },
  {
    icon: hrIcon,
    title: "HR & Payroll",
    desc: "Simplify employee management, attendance, and automated payroll processing.",
    points: ["Employee Records", "Payroll Automation", "Attendance Tracking"],
  },
  {
    icon: salesIcon,
    title: "Sales & Purchase",
    desc: "Manage procurement cycles and CRM pipelines with end-to-end transparency.",
    points: ["Sales Tracking", "Vendor Management", "Purchase Orders"],
  },
  {
    icon: adminIcon,
    title: "Admin Dashboard",
    desc: "Advanced data visualization and centralized control over all operations.",
    points: ["Analytics Dashboard", "Reports", "Performance Metrics"],
  },
  {
    icon: cloudIcon,
    title: "Cloud Solutions",
    desc: "Scalable cloud hosting and SaaS deployment for global accessibility.",
    points: ["Cloud Hosting", "SaaS Deployment", "Secure Storage"],
  },
  {
    icon: supportIcon,
    title: "Support",
    desc: "Dedicated 24/7 maintenance and technical support for seamless operations.",
    points: ["System Monitoring", "Bug Fixing", "Updates"],
  },
];

const benefits = [
  {
    icon: increaseIcon,
    title: "Increased Efficiency",
    desc: "Automate repetitive tasks and reduce manual errors significantly.",
  },
  {
    icon: leadsIcon,
    title: "Better Decision Making",
    desc: "Access centralized accurate data for better forecasting and strategy.",
  },
  {
    icon: conversionIcon,
    title: "Cost Reduction",
    desc: "Optimize resource allocation and eliminate unnecessary operational costs.",
  },
];

const whyUs = [
  {
    icon: teamIcon,
    title: 'Agile Methodologies',
    desc: 'We deliver in sprints, ensuring you see progress and provide feedback early.',
  },
  {
    icon: teamIcon,
    title: 'Scalable Architecture',
    desc: "Our systems grow as your business grows, handling more users and data effortlessly..",
  },
  {
    icon: teamIcon,
    title: 'Post-Launch Partnership',
    desc: 'We do not just launch; we support you for years to ensure maximum ROI.',
  },
];

const stats = [
  { value: "35x", label: "Improve Productivity", light: true },
  { value: "25x", label: "Reduce Operational Costs" },
  { value: "60%", label: "Faster Reporting" },
  { value: "30%", label: "Reduce Inventory Costs", dark: true },
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
const ERPDevelopment = () => {
  const service = services.find(s => s.id === 'erp-development');

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
              Our ERP Development
            </h2>
            <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 520, margin: '0 auto' }}>
Comprehensive ERP solutions designed to streamline and scale your business operations.            </p>
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
              Benefits of ERP Software
            </h2>

            <p
              style={{
                fontSize: 14.5,
                color: "#6b7280",
                lineHeight: 1.7,
                margin: "0 0 32px",
              }}
            >
              Implementing ERP software improves efficiency, centralizes business data, and helps organizations make smarter decisions.
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
We build scalable ERP systems tailored to your business processes, ensuring efficiency, transparency, and long-term growth.            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {whyUs.map((w, i) => <WhyRow key={i} {...w} />)}
            </div>
          </div>

          {/* RIGHT STATS */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  }}
>
  <div
    style={{
      background: "#fff",
      padding: "30px",
      borderRadius: 14,
      textAlign: "center",
      boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
    }}
  >
    <h3 style={{ fontSize: 28, color: "#7c3aed", margin: 0 }}>6+</h3>
    <p style={{ fontSize: 12, color: "#6b7280", marginTop: 6 }}>
      YEARS EXPERIENCE
    </p>
  </div>

  <div
    style={{
      background: "#fff",
      padding: "30px",
      borderRadius: 14,
      textAlign: "center",
      boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
    }}
  >
    <h3 style={{ fontSize: 28, color: "#7c3aed", margin: 0 }}>80+</h3>
    <p style={{ fontSize: 12, color: "#6b7280", marginTop: 6 }}>
      PROJECTS DONE
    </p>
  </div>

  <div
    style={{
      background: "#fff",
      padding: "30px",
      borderRadius: 14,
      textAlign: "center",
      boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
    }}
  >
    <h3 style={{ fontSize: 28, color: "#7c3aed", margin: 0 }}>15+</h3>
    <p style={{ fontSize: 12, color: "#6b7280", marginTop: 6 }}>
      EXPERT DEVELOPERS
    </p>
  </div>

  <div
    style={{
      background: "#fff",
      padding: "30px",
      borderRadius: 14,
      textAlign: "center",
      boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
    }}
  >
    <h3 style={{ fontSize: 28, color: "#7c3aed", margin: 0 }}>98%</h3>
    <p style={{ fontSize: 12, color: "#6b7280", marginTop: 6 }}>
      CLIENT SATISFACTION
    </p>
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

export default ERPDevelopment;
