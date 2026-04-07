import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import heroBg from '../assets/hero section/about-services-blog-contactus pages/ea708e963f94370a51861237163c2b9c4513b203.jpg';
import ClientLogos from '../components/ClientLogos.jsx';
import AboutSection from '../components/Aboutsection.jsx';
import StatsBar from '../components/StatsBar.jsx';
import goalsImg from '../assets/hero section/about-services-blog-contactus pages/Goals.png';
import visionImg from '../assets/hero section/about-services-blog-contactus pages/vision.png';
import missionImg from '../assets/hero section/about-services-blog-contactus pages/mission.png';
import OurCoreValues from '../components/OurCoreValues.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import TestimonialsSlider from '../components/TestimonialsSection.jsx';
const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title="About TrillionApp"
        subtitle="Learn about our journey, mission, and the values that drive us"
        backgroundImage={heroBg}
      />

      {/* Client Logos Section */}
      <ClientLogos/>

      {/* About  Section */}
      <AboutSection/>

      {/* Vision, Mission, Goals Images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex justify-center">
              <img 
                src={visionImg} 
                alt="Vision" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={missionImg} 
                alt="Mission" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={goalsImg} 
                alt="Goals" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <OurCoreValues />

      <WhyChooseUs/>

    

      <TestimonialsSlider />

      
    </MainLayout>
  );
};

export default About;
