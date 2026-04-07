// ProjectsSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projectImage from '../assets/All/Rectangle 10 (3).png';

const projects = [
  { id: 1, title: "Smart Visions", category: "Design / Ideas", image: projectImage },
  { id: 2, title: "Web Development", category: "Design / Ideas", image: projectImage },
  { id: 3, title: "Tech Solutions", category: "Design / Ideas", image: projectImage },
  { id: 4, title: "Smart Marketing", category: "Ideas", image: projectImage },
  { id: 5, title: "Project 5", category: "Ideas", image: projectImage },
  { id: 6, title: "Project 6", category: "Ideas", image: projectImage },
  { id: 7, title: "Project 7", category: "Ideas", image: projectImage },
  { id: 8, title: "Project 8", category: "Ideas", image: projectImage },
  { id: 9, title: "Project 9", category: "Ideas", image: projectImage },
  { id: 10, title: "Project 10", category: "Ideas", image: projectImage },
  { id: 11, title: "Project 11", category: "Ideas", image: projectImage },
  { id: 12, title: "Project 12", category: "Ideas", image: projectImage },
];

const ProjectsSlider = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex justify-between items-start gap-10">
          <div className="flex-1">
            <p className="text-purple-500 uppercase tracking-wider text-xs">-- Our Completed Projects --</p>
            <h2 className="text-3xl font-bold mt-2 text-justify">Improve & Enhance <br/>Our Tech Projects</h2>
          </div>
          <div className="flex-1">
            <p className="text-gray-600 text-right leading-relaxed mb-0 text-xs mt-9">
              There are various successful projects from IT strategy consulting to the end-to-end development of scalable solutions made by our creative and experienced IT professionals.
            </p>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={4}
          navigation
          pagination={{ 
            clickable: true,
            el: '.custom-pagination',
            renderBullet: function (index, className) {
              return '<span class="' + className + ' pagination-dash"></span>';
            }
          }}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                {/* Color Overlay on Hover */}
                <div className="absolute inset-0 bg-purple-600/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-sm">{project.category}</p>
                  </div>
                </div>
                {/* Default Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  <p className="text-purple-400 text-sm">{project.category}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination with Dashes */}
        <div className="testimonials-pagination mt-8 flex justify-center gap-6">
          
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;