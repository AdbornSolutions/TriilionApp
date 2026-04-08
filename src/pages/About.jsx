import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import heroBg from '../assets/hero section/about-services-blog-contactus pages/ea708e963f94370a51861237163c2b9c4513b203.jpg';
import ClientLogos from '../components/ClientLogos.jsx';
import AboutSection from '../components/Aboutsection.jsx';
import StatsBar from '../components/StatsBar.jsx';
import goalsImg from '../assets/visionbg.png';
import visionImg from '../assets/visionbg.png';
import missionImg from '../assets/visionbg.png';
import OurCoreValues from '../components/OurCoreValues.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import TestimonialsSlider from '../components/TestimonialsSection.jsx';
const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            ABOUT <span className="text-purple-600">Company</span>
          </>
        }
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
            {/* Vision */}
            <div className="relative group">
              <img 
                src={visionImg} 
                alt="Vision" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg flex flex-col justify-center items-center p-6  ">
                <h3 className="text-[#8A38F5] text-2xl  font-bold mb-2">Our Vision</h3>
                <p className="text-black/90 text-16px text-center">
To be a leading provider of cutting-edge technology solutions, driving business growth and transformation globally.                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group">
              <img 
                src={missionImg} 
                alt="Mission" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg flex flex-col justify-center items-center p-6  ">
                <h3 className="text-[#8A38F5] text-2xl  font-bold mb-2">Our Mission</h3>
                <p className="text-black/90 text-16px text-center">
To empower businesses with innovative and reliable mobile application development, ERP development, digital marketing, and web design solutions.                </p>
              </div>
            </div>

            {/* Goals */}
            <div className="relative group">
              <img 
                src={goalsImg} 
                alt="Goals" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg flex flex-col justify-center items-center p-6  ">
                <h3 className="text-[#8A38F5] text-2xl  font-bold mb-2">Our Goals</h3>
                <p className="text-black/90 text-16px text-center">
Offer result-oriented digital marketing strategies to maximize online visibility, brand awareness, and customer engagement.                </p>
              </div>
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
