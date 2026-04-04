/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { ServiceCard, StatCard, TestimonialCard, BlogCard, ProjectCard } from '../components/Cards';
import { services, stats, testimonials, blogPosts, projects } from '../data/data.jsx';
import heroBg from '../assets/hero section/home page/8731ebdc3c6d444ea23d0f3d4d6457dbc9de897b.jpg';
import Aboutsection from '../components/Aboutsection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import ClientLogos from '../components/ClientLogos.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import ProjectsSlider from '../components/ProjectsSlider.jsx';
import BlogPreviewSection from '../components/BlogPreviewSection.jsx';

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

      <ClientLogos />

      <Aboutsection />
      <ServicesSection />

      <ProjectsSlider />

      <TestimonialsSection />

      <BlogPreviewSection />
    </MainLayout>
  );
};

export default Home;
