import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { ServiceCard, StatCard, TestimonialCard, BlogCard, ProjectCard } from '../components/Cards';
import { services, stats, testimonials, blogPosts, projects } from '../data/data.jsx';
import heroBg from '../assets/hero section/home page/8731ebdc3c6d444ea23d0f3d4d6457dbc9de897b.jpg';
import logo1 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.29-PM-1-e1692795255896 1.png';
import logo2 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.29-PM-e1692794255684 1.png';
import logo3 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.30-PM-e1692795194443 1.png';
import logo4 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.31-PM-2-e1692794545714 1.png';
import logo5 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.33-PM-e1692795093316 1.png';
import logo6 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.34-PM-1-e1692794981643 1.png';
import logo7 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.34-PM-3 1.png';
import logo8 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.35-PM-1-e1692795156577 1.png';
import logo9 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.35-PM-e1692794374252 1.png';
import logo10 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.36-PM-1-e1692794346474 1.png';
import logo11 from '../assets/company logos/WhatsApp-Image-2023-08-11-at-12.31.36-PM-e1692794300278 1.png';

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title="IT Solutions & Services"
        subtitle="Transform your business with cutting-edge technology solutions. We deliver innovation, quality, and excellence."
        backgroundImage={heroBg}
        ctaText="Get Started"
        ctaLink="/contact"
      />

 {/* Client Logos Section - Marquee Animation */}
<section className="py-12 bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <p className="text-center text-gray-500 font-semibold mb-8">
      TRUSTED BY COMPANIES WORLDWIDE
    </p>

    {/* Marquee Wrapper */}
    <div className="relative overflow-hidden">
      
      {/* Marquee Track */}
      <div className="flex space-x-12 animate-marquee">

        {/* Logos (Original Colors - No Hover / No Grayscale) */}
        {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11,
          logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`client-${index}`}
            className="h-12 w-auto object-contain flex-shrink-0"
          />
        ))}

      </div>

      {/* Left Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

    </div>
  </div>
</section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="We're a Team of Passionate IT Professionals"
                subtitle="With years of experience and a commitment to excellence, we deliver solutions that drive business growth."
                centered={false}
              />
              <p className="text-gray-600 mb-6 leading-relaxed">
                At TrillionApp Technologies, we believe in the power of innovation and technology to transform businesses. 
                Our team of skilled professionals is dedicated to delivering high-quality solutions that meet your unique needs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From web development to ERP systems, digital marketing to mobile apps, we offer comprehensive IT services 
                that help you stay ahead in today's competitive landscape.
              </p>
              <Link
                to="/about"
                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img
                src="/assets/about-preview.jpg"
                alt="About TrillionApp"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl shadow-lg">
                <div className="text-white text-3xl font-bold">6+</div>
                <div className="text-white/90 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                label={stat.label}
                icon={
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive IT solutions tailored to your business needs"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={`/services/${service.id}`}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We're Ready to Develop Your Site!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's turn your vision into reality. Get in touch with us today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Recent Projects"
            subtitle="Explore our portfolio of successful projects"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Don't just take our word for it"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Latest News & Insights"
            subtitle="Stay updated with industry trends and company news"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                link={post.link}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
