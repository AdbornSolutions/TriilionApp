// TestimonialsSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import dottedBg from '../assets/All/doted bg.png';

const testimonials = [
  {
    name: "Moonkle LTD",
    role: "Client of Company",
    content: "Exceptional support in migrating our legacy systems to the cloud, enhancing our scalability and security.",
    image: "/images/client1.jpg",
  },
  {
    name: "SoftTech",
    role: "Manager of Company",
    content: "Modernized our IT infrastructure without disrupting daily operations. Their team was responsive and knowledgeable.",
    image: "/images/client2.jpg",
  },
  {
    name: "TechNova",
    role: "CEO",
    content: "Delivered solutions on time and exceeded expectations in terms of quality and support.",
    image: "/images/client3.jpg",
  },
  {
    name: "InnovateX",
    role: "CTO",
    content: "A highly professional team that helped scale our systems efficiently.",
    image: "/images/client4.jpg",
  },
];

const TestimonialsSlider = () => {
  return (
    <>
      {/* Pagination dash styles */}
      <style>{`
        .testimonials-pagination .pagination-dash {
          width: 40px !important;
          height: 4px !important;
          border-radius: 2px !important;
          background: #c4b5d4 !important;
          opacity: 1 !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          display: inline-block !important;
          margin: 0 6px !important;
        }
        .testimonials-pagination .pagination-dash.swiper-pagination-bullet-active {
          background: #7c3aed !important;
          width: 60px !important;
        }
      `}</style>

      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#eeebf5", paddingTop: 80, paddingBottom: 80 }}
      >
        {/* Dotted bg overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${dottedBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.09,
            filter: "brightness(10) invert(1)",
          }}
        />

        {/* Large blurred circle — top left decorative shape */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(200,190,230,0.45)",
            top: -100,
            left: -120,
            filter: "blur(60px)",
          }}
        />

        {/* Large blurred circle — top right dotted area */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(210,200,235,0.3)",
            top: -60,
            right: -60,
          }}
        />

        <div className="relative z-10">
          {/* Heading */}
          <div className="text-center mb-16 px-4">
            <p
              style={{
                color: "#9333ea",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                marginBottom: 10,
              }}
            >
              —Our Completed Projects
            </p>
            <h2
              style={{
                fontSize: 38,
                fontWeight: 800,
                color: "#0f0a1e",
                lineHeight: 1.25,
              }}
            >
              Improve &amp; Enhance Our<br />Tech Projects
            </h2>
          </div>

          {/* Swiper */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Swiper
              modules={[Pagination]}
              spaceBetween={28}
              slidesPerView={2}
              slidesPerGroup={2}
              pagination={{
                clickable: true,
                el: ".testimonials-pagination",
                renderBullet: function (index, className) {
                  return '<span class="' + className + ' pagination-dash"></span>';
                }
              }}
              breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 2 },
              }}
              style={{ paddingTop: 60, paddingBottom: 8 }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative"
                    style={{
                      background: "#fff",
                      borderRadius: 10,
                      boxShadow: "0 4px 24px rgba(100,80,160,0.10)",
                      padding: "24px 28px 32px",
                      minHeight: 220,
                    }}
                  >
                    {/* Avatar + Name pill — overlapping top */}
                    <div
                      className="absolute flex items-center"
                      style={{ top: -44, left: 20 }}
                    >
                      {/* Avatar */}
                      <div
                        style={{
                          width: 78,
                          height: 78,
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "3px solid #a78bfa",
                          flexShrink: 0,
                          background: "#e0d7f5",
                          zIndex: 2,
                        }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>

                      {/* Name + role pill */}
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "0 24px 24px 0",
                          padding: "10px 20px 10px 16px",
                          marginLeft: -8,
                          boxShadow: "0 2px 12px rgba(100,80,160,0.12)",
                          borderBottom: "3px solid #7c3aed",
                          minWidth: 150,
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 15,
                            color: "#0f0a1e",
                            lineHeight: 1.3,
                          }}
                        >
                          {testimonial.name}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#9ca3af",
                            marginTop: 2,
                          }}
                        >
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Stars — top right */}
                    <div
                      className="absolute flex gap-0.5"
                      style={{ top: 20, right: 20 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="#FBBF24"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.961c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.961a1 1 0 00-.364-1.118L2.064 9.39c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.962z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p
                      style={{
                        marginTop: 48,
                        color: "#374151",
                        fontSize: 14,
                        lineHeight: 1.75,
                      }}
                    >
                      {testimonial.content}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Dash pagination */}
            <div
              className="testimonials-pagination mt-10 flex justify-center gap-3"
            />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSlider;