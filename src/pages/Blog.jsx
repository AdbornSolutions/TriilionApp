import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { BlogCard } from '../components/Cards';
import { blogPosts } from '../data/data.jsx';

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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Latest Articles"
            subtitle="Stay informed with our latest insights and industry news"
          />
          
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
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
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-purple-600 font-semibold mb-3">{blogPosts[0].date}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <a
                    href={blogPosts[0].link}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Read Full Article
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest insights, trends, and updates delivered straight to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;