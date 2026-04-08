import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero section/about-services-blog-contactus pages/ea708e963f94370a51861237163c2b9c4513b203.jpg';
import blogImg1 from '../assets/All/blog1.jpg';
import blogImg2 from '../assets/All/blog2.jpg';
import blogImg3 from '../assets/All/blog3.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Why Cloud Solutions Are Important for Modern Businesses",
    date: "1 Feb",
    image: blogImg1,
    link: "/blog/cloud-solutions"
  },
  {
    id: 2,
    title: "Top 7 Benefits of Having a Professional Business Website",
    date: "16 Feb",
    image: blogImg2,
    link: "/blog/business-website-benefits"
  },
  {
    id: 3,
    title: "How UI/UX Design Impacts Your Customer Experience",
    date: "20 Feb",
    image: blogImg3,
    link: "/blog/ui-ux-design"
  },
  {
    id: 4,
    title: "Why Cloud Solutions Are Important for Modern Businesses",
    date: "1 Feb",
    image: blogImg1,
    link: "/blog/cloud-solutions-2"
  },
  {
    id: 5,
    title: "Top 7 Benefits of Having a Professional Business Website",
    date: "16 Feb",
    image: blogImg2,
    link: "/blog/business-website-benefits-2"
  },
  {
    id: 6,
    title: "How UI/UX Design Impacts Your Customer Experience",
    date: "20 Feb",
    image: blogImg3,
    link: "/blog/ui-ux-design-2"
  }
];

const Blog = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            OUR <span className='text-purple-600'>Blogs</span>
          </>
        }
        subtitle="Insights, trends, and updates from the world of technology"
        backgroundImage={heroBg}
      />

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="overflow-hidden"
                style={{ boxShadow: '10px 10px 10px rgba(80,60,0,0)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden" style={{ height: '310px' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: 230,
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  {/* Purple Date Badge */}
                  <div
                    className="absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded"
                    style={{ backgroundColor: '#7c3aed', fontSize: '11px', letterSpacing: '0.02em' }}
                  >
                    {post.date}
                  </div>
                </div>

                {/* Floating Title Badge - Half on image, half outside */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#fff',
                    color: '#0f0a1e',
                    fontWeight: 700,
                    fontSize: 14,
                    padding: '12px 20px',
                    whiteSpace: 'normal',
                    maxWidth: '90%',
                    width: 'max-content',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.20)',
                    zIndex: 10,
                    borderRadius: '8px',
                    textAlign: 'left',
                  }}
                >
                  <h3 className="font-bold text-gray-900 mb-2 leading-snug" style={{ fontSize: '14px', fontFamily: 'Georgia, serif', lineHeight: '1.45' }}>
                    {post.title}
                  </h3>
                  <Link
                    to={post.link}
                    className="inline-block font-semibold"
                    style={{
                      fontSize: '13px',
                      paddingBottom: '2px',
                      textDecoration: 'none',
                      position: 'relative',
                      color: '#1a1228',
                      borderBottom: '2px solid #1a1228',
                      overflow: 'hidden',
                      zIndex: 1,
                    }}
                    onMouseEnter={(e) => {
                      const fill = e.currentTarget.querySelector('.hover-fill');
                      if (fill) {
                        fill.style.height = '100%';
                      }
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = '#7c3aed';
                    }}
                    onMouseLeave={(e) => {
                      const fill = e.currentTarget.querySelector('.hover-fill');
                      if (fill) {
                        fill.style.height = '0';
                      }
                      e.currentTarget.style.color = '#1a1228';
                      e.currentTarget.style.borderColor = '#1a1228';
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 2 }}>Read More</span>
                    <span
                      className="hover-fill"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: 0,
                        background: '#8A38F5',
                        zIndex: 1,
                        transition: 'height 0.4s ease',
                      }}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
          >
            <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-white/10"></div>
            <div className="absolute bottom-8 right-24 w-12 h-12 rounded-full bg-white/10"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Subscribe To Our Newsletter!
              </h2>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-6 py-4 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-purple-600 w-14 h-14 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;