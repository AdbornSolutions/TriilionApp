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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p
            style={{
              color: '#9333ea',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.06em',
              marginBottom: 8,
            }}
          >
            —What's Happening
          </p>
          <h2
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: '#0f0a1e',
            }}
          >
            News &amp; Articles
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group/blogcard"
              style={{
                background: '#fff',
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(80,60,140,0.09)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image with date badge */}
              <div style={{ position: 'relative', height: 220, flexShrink: 0 }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                {/* Date badge — top left purple rectangle */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    background: '#7c3aed',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: 4,
                    letterSpacing: '0.03em',
                    zIndex: 2,
                  }}
                  onMouseEnter={e => {
                    const bgEl = e.currentTarget.querySelector('.date-hover-bg');
                    if (bgEl) bgEl.style.top = '0';
                  }}
                  onMouseLeave={e => {
                    const bgEl = e.currentTarget.querySelector('.date-hover-bg');
                    if (bgEl) bgEl.style.top = '100%';
                  }}
                >
                  <span
                    className="date-hover-bg absolute left-0 w-full h-full transition-all duration-500"
                    style={{
                      top: '100%',
                      background: '#6d28d9',
                      zIndex: -1,
                    }}
                  />
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: '20px 22px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#0f0a1e',
                    lineHeight: 1.45,
                    marginBottom: 16,
                    flex: 1,
                  }}
                >
                  {post.title}
                </h3>

                {/* Read More — outlined button with bottom-to-top hover */}
                <Link
                  to={post.link || '/blog'}
                  className="relative overflow-hidden"
                  style={{
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                    border: '1.5px solid #d1d5db',
                    color: '#374151',
                    fontSize: 13,
                    fontWeight: 600,
                    padding: '7px 20px',
                    borderRadius: 4,
                    textDecoration: 'none',
                    zIndex: 1,
                  }}
                  onMouseEnter={e => {
                    const bgEl = e.currentTarget.querySelector('.readmore-hover-bg');
                    if (bgEl) bgEl.style.top = '0';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = '#7c3aed';
                  }}
                  onMouseLeave={e => {
                    const bgEl = e.currentTarget.querySelector('.readmore-hover-bg');
                    if (bgEl) bgEl.style.top = '100%';
                    e.currentTarget.style.color = '#374151';
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                >
                  <span
                    className="readmore-hover-bg absolute left-0 w-full h-full transition-all duration-500"
                    style={{
                      top: '100%',
                      background: '#7c3aed',
                      zIndex: -1,
                    }}
                  />
                  Read More
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