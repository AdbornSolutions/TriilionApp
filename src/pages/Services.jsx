import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { FeatureCard, TestimonialCard } from '../components/Cards';
import { services, whyChooseUs, testimonials } from '../data/data.jsx';

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive IT solutions to power your digital transformation"
        backgroundImage="/assets/services-hero.jpg"
      />

      {/* Main Services Section with Left Menu */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Side Menu */}
            <div className="lg:col-span-1">
              <nav className="sticky top-24 space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      selectedService.id === service.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-purple-50 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`${selectedService.id === service.id ? 'text-white' : 'text-purple-600'}`}>
                        {service.icon}
                      </div>
                      <span>{service.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Side Dynamic Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {selectedService.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedService.description}
                    </p>
                    <Link
                      to={`/services/${selectedService.id}`}
                      className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                  <div>
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="rounded-xl shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Working Process"
            subtitle="A proven methodology for successful project delivery"
          />
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600" />
            
            <div className="space-y-12">
              {[
                { step: 1, title: 'Requirement Analysis', description: 'We thoroughly understand your business needs and objectives' },
                { step: 2, title: 'Planning & Strategy', description: 'Creating a detailed roadmap and technical architecture' },
                { step: 3, title: 'Design & Development', description: 'Building your solution with cutting-edge technologies' },
                { step: 4, title: 'Testing', description: 'Rigorous quality assurance to ensure flawless performance' },
                { step: 5, title: 'Deployment', description: 'Smooth rollout and integration with your existing systems' },
                { step: 6, title: 'Support & Maintenance', description: 'Ongoing support to keep your systems running optimally' },
              ].map((item, index) => (
                <div key={item.step} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step {item.step}: {item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full items-center justify-center text-white font-bold z-10 shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Our Services?"
            subtitle="Experience the TrillionApp advantage"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.slice(0, 8).map((reason, index) => (
              <FeatureCard
                key={index}
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                }
                title={reason}
                description=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Client Success Stories"
            subtitle="Hear from our satisfied clients"
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
    </MainLayout>
  );
};

export default Services;
