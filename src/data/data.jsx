export const services = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Boost your online presence with our comprehensive digital marketing strategies including SEO, social media, PPC, and content marketing.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H9.996M5 15H9.996M14.004 9H20M14.004 15H20M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
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
  id: 'ui-ux-design',
  title: 'UI/UX Designing',
  description: 'Create modern, intuitive and visually appealing user interfaces that deliver seamless user experiences across all devices.',
  icon: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  features: [
    'User Interface Design',
    'User Experience Design',
    'Wireframing',
    'Prototyping',
    'Responsive Design',
    'Design Systems'
  ],
  image: '/assets/ui-ux-design.jpg',
},

// {
//   id: 'data-analysis',
//   title: 'Data Analysis',
//   description: 'Gain valuable insights from your data with advanced analytics, dashboards, and data-driven decision making.',
//   icon: (
//     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3v18M5 13l4-4 4 4 6-6" />
//     </svg>
//   ),
//   features: [
//     'Business Intelligence',
//     'Data Visualization',
//     'Predictive Analytics',
//     'Dashboard Development',
//     'Big Data Processing',
//     'Reporting Systems'
//   ],
//   image: '/assets/data-analysis.jpg',
// },
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
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in everything we deliver.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Customer Focus',
    description: 'Your success is our priority. We tailor solutions to your unique needs.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project, big or small.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Teamwork',
    description: 'Collaboration and teamwork are at the heart of our success.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
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
