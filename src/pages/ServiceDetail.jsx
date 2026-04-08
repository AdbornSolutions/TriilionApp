import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import heroBg from '../assets/hero section/about-services-blog-contactus pages/ea708e963f94370a51861237163c2b9c4513b203.jpg';

const ServiceDetail = ({ service }) => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title={service.title}
        subtitle={`Professional ${service.title.toLowerCase()} services for your business`}
        backgroundImage={heroBg}
        ctaText="Get Started"
        ctaLink="/contact"
      />

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title={`About ${service.title}`}
                subtitle="Comprehensive solutions for your needs"
                centered={false}
              />
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of experts specializes in delivering top-notch {service.title.toLowerCase()} 
                solutions that are tailored to your specific business requirements. We leverage the 
                latest technologies and industry best practices to ensure exceptional results.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Our Expertise Includes:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={`Why Choose Our ${service.title}?`}
            subtitle="Experience excellence in every aspect"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {service.features.slice(0, 6).map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature}</h3>
                <p className="text-gray-600 text-sm">
                  Professional {service.title.toLowerCase()} service with focus on quality and customer satisfaction.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServiceDetail;
