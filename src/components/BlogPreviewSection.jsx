import { Link } from 'react-router-dom';
import marketingImg from '../assets/All/marketing.png';
import erpImg from '../assets/All/erp.png';
import webdesigningImg from '../assets/All/webdesigning.png';

const blogPosts = [
  {
    id: 1,
    title: "Digital Marketing Strategies for Modern Business",
    date: "Jan 15, 2024",
    image: marketingImg,
    link: "/blog/digital-marketing"
  },
  {
    id: 2,
    title: "ERP Development: Streamlining Your Business Operations",
    date: "Feb 20, 2024",
    image: erpImg,
    link: "/blog/erp-development"
  },
  {
    id: 3,
    title: "Web Designing Trends That Will Dominate This Year",
    date: "Mar 10, 2024",
    image: webdesigningImg,
    link: "/blog/web-designing"
  }
];

const BlogPreviewSection = () => {
  return (
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
                            background: '#7c3aed',
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
  );
};

export default BlogPreviewSection;