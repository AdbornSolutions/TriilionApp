import { coreValues } from '../data/data.jsx';
import { FeatureCard } from './Cards';
import coreValueBg from '../assets/hero section/about-services-blog-contactus pages/our-core-value bg .png';

const OurCoreValues = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${coreValueBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center">
        <div className="text-center mb-16">
          <p
            style={{
              color: "#9333ea",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              marginBottom: 10,
            }}
          >
            —Our Core Values—
          </p>
          <h2
            style={{
              fontSize: 38,
              fontWeight: 800,
              color: "#0f0a1e",
              lineHeight: 1.25,
            }}
          >
            The Principles That Guide<br />Everything We Do
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {coreValues.map((value, index) => (
            <FeatureCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;
