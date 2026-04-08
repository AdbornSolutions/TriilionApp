import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { FeatureCard, TestimonialCard } from '../components/Cards';
import { whyChooseUs, testimonials } from '../data/data.jsx';
import heroBg from '../assets/hero section/about-services-blog-contactus pages/ea708e963f94370a51861237163c2b9c4513b203.jpg';
import MainServicesSection from '../components/MainServicesSection';
import OurProcess from '../assets/Frame 121.png';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import TestimonialsSlider from '../components/TestimonialsSection.jsx';


const Services = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Our <span className='text-purple-600'>Services</span>
          </>
        }
        subtitle="Comprehensive IT solutions to power your digital transformation"
        backgroundImage={heroBg}
      />

      {/* Main Services Section with Left Menu */}
      <MainServicesSection />

      {/* Working Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* LEFT — Text Content */}
            {/* Eyebrow */}
            <div className="flex items-center gap-2" style={{ marginBottom: 12 }}>
              <span style={{ display: 'block', width: 18, height: 1, background: '#9333ea' }} />
              <p style={{ color: '#9333ea', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em' }}>
                Work Process
              </p>
            </div>
          <SectionTitle
            title="Our Working Process"
            subtitle="A proven methodology for successful project delivery"
          />
        </div>
        <div className="w-full mt-3">
          <img 
            src={OurProcess} 
            alt="Our Working Process" 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Why Choose Us */}
     <WhyChooseUs/>

      {/* Testimonials */}
      <TestimonialsSlider/>
    </MainLayout>
  );
};

export default Services;
