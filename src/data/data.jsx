import iconImg from '../assets/All/icon.png';
import innovationIcon from '../assets/Cards icon/inovation.png';
import qualityIcon from '../assets/Cards icon/quality.png';
import integrityIcon from '../assets/Cards icon/integrity.png';
import customerIcon from '../assets/Cards icon/customer.png';
import excellenceIcon from '../assets/Cards icon/excellence.png';
import teamworkIcon from '../assets/Cards icon/teamwork.png';

export const services = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Boost your online presence with our comprehensive digital marketing strategies including SEO, social media, PPC, and content marketing.',
    icon: <img src={iconImg} alt="Digital Marketing" className="w-8 h-8" />,
    features: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Pay-Per-Click Advertising (PPC)',
      'Content Marketing',
      'Email Marketing',
      'Analytics & Reporting',
    ],
    image: '/assets/digital-marketing.jpg',
  },
  {
    id: 'erp-development',
    title: 'ERP Development',
    description: 'Streamline your business processes with custom Enterprise Resource Planning solutions tailored to your specific needs.',
    icon: <img src={iconImg} alt="ERP Development" className="w-8 h-8" />,
    features: [
      'Custom ERP Solutions',
      'Module Integration',
      'Real-time Analytics',
      'Inventory Management',
      'HR & Payroll Systems',
      'Financial Management',
    ],
    image: '/assets/erp-development.jpg',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Create powerful, scalable, and user-friendly web applications using modern technologies and best practices.',
    icon: <img src={iconImg} alt="Web Development" className="w-8 h-8" />,
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'CMS Development',
      'API Integration',
      'Progressive Web Apps',
      'Website Maintenance',
    ],
    image: '/assets/web-development.jpg',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Build stunning mobile applications for iOS and Android platforms that deliver exceptional user experiences.',
    icon: <img src={iconImg} alt="Mobile App Development" className="w-8 h-8" />,
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-platform Solutions',
      'React Native Development',
      'Flutter Development',
      'App Maintenance & Support',
    ],
    image: '/assets/mobile-app.jpg',
  },
  

 {
   id: 'data-analysis',
   title: 'Data Analysis',
  description: 'Gain valuable insights from your data with advanced analytics, dashboards, and data-driven decision making.',
   icon: <img src={iconImg} alt="Data Analysis" className="w-8 h-8" />,
   features: [
     'Business Intelligence',
     'Data Visualization',
    'Predictive Analytics',
     'Dashboard Development',
     'Big Data Processing',
     'Reporting Systems'
   ],
   image: '/assets/data-analysis.jpg',
 },
];

export const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '80+', label: 'Happy Clients' },
  { number: '15+', label: 'Team Members' },
  { number: '6+', label: 'Years Experience' },
];

export const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO',
    company: 'TechCorp',
    content: 'Working with TrillionApp was an absolute pleasure. They delivered our project on time and exceeded our expectations.',
    image: '/assets/testimonial-1.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'InnovateCo',
    content: 'The digital marketing strategies implemented by TrillionApp helped us increase our online visibility by 200%.',
    image: '/assets/testimonial-2.jpg',
  },
  {
    name: 'Michael Brown',
    role: 'Founder',
    company: 'StartupXYZ',
    content: 'Their team\'s expertise in ERP development transformed our business operations completely. Highly recommended!',
    image: '/assets/testimonial-3.jpg',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Digital Marketing Trends in 2024',
    date: 'March 15, 2024',
    excerpt: 'Discover the latest digital marketing trends that will shape the industry this year.',
    image: '/assets/blog-1.jpg',
    link: '/blog/top-10-digital-marketing-trends',
  },
  {
    id: 2,
    title: 'Why Your Business Needs an ERP System',
    date: 'March 10, 2024',
    excerpt: 'Learn how ERP systems can streamline your business operations and boost productivity.',
    image: '/assets/blog-2.jpg',
    link: '/blog/why-your-business-needs-erp',
  },
  {
    id: 3,
    title: 'The Future of Mobile App Development',
    date: 'March 5, 2024',
    excerpt: 'Explore emerging technologies and trends in mobile app development.',
    image: '/assets/blog-3.jpg',
    link: '/blog/future-of-mobile-app-development',
  },
];

export const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A full-featured online shopping platform with payment integration.',
    image: '/assets/project-1.jpg',
  },
  {
    id: 2,
    title: 'Healthcare Management App',
    category: 'Mobile App',
    description: 'Comprehensive healthcare management solution for clinics.',
    image: '/assets/project-2.jpg',
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'ERP Development',
    description: 'Real-time financial analytics and reporting dashboard.',
    image: '/assets/project-3.jpg',
  },
  {
    id: 4,
    title: 'Restaurant Booking System',
    category: 'Web Development',
    description: 'Online reservation and table management system.',
    image: '/assets/project-4.jpg',
  },
];

export const coreValues = [
  {
    title: 'Innovation',
    description: 'We embrace creativity and push boundaries to deliver cutting-edge solutions.',
    icon: <img src={innovationIcon} alt="Innovation" className="w-8 h-8" />,
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in everything we deliver.',
    icon: <img src={qualityIcon} alt="Quality" className="w-8 h-8" />,
  },
  {
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices.',
    icon: <img src={integrityIcon} alt="Integrity" className="w-8 h-8" />,
  },
  {
    title: 'Customer Focus',
    description: 'Your success is our priority. We tailor solutions to your unique needs.',
    icon: <img src={customerIcon} alt="Customer Focus" className="w-8 h-8" />,
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project, big or small.',
    icon: <img src={excellenceIcon} alt="Excellence" className="w-8 h-8" />,
  },
  {
    title: 'Teamwork',
    description: 'Collaboration and teamwork are at the heart of our success.',
    icon: <img src={teamworkIcon} alt="Teamwork" className="w-8 h-8" />,
  },
];

export const whyChooseUs = [
  'Experienced team of professionals',
  'Cutting-edge technology stack',
  'Agile development methodology',
  'Transparent communication',
  'On-time delivery',
  '24/7 support and maintenance',
  'Competitive pricing',
  'Scalable solutions',
];
