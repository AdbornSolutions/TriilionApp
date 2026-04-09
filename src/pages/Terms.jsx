import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import heroBg from '../assets/hero section/about-services-blog-contactus pages/ea708e963f94370a51861237163c2b9c4513b203.jpg';

const Terms = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully"
        backgroundImage={heroBg}
        overlay={true}
      />

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legal Document Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
              Legal Document
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-500 mb-8">Last Updated: October 24, 2023</p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Welcome to Trillion Apps Technology. By accessing or using our services, you agree to be bound by the terms and conditions outlined below. Please read them carefully.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By using the website or purchasing services from Trillion Apps Technology, you acknowledge that you have read, understood, and agreed to be bound by these terms. If you do not agree, please refrain from using our services.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We provide a comprehensive range of technology solutions including but not limited to:
              </p>
              <div className="grid grid-cols-2 gap-2 ml-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-purple-500">⊛</span> Web Design & Development
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-purple-500">⊛</span> Mobile Application Development
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-purple-500">⊛</span> ERP Solutions
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-purple-500">⊛</span> Digital Marketing Strategy
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-purple-500">⊛</span> Custom Software Development
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-purple-500">⊛</span> IT Consultancy Services
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed">
                Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to provide accurate, current, and complete information during the registration and service process.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content, including text, graphics, logos, and software, is the property of Trillion Apps Technology or its content suppliers and is protected by international copyright laws.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Payments & Refunds</h2>
              <p className="text-gray-600 leading-relaxed">
                All payments for services shall be made as per the agreed-upon project milestones. Refund requests are subject to the specific service agreement signed at the commencement of the project. Generally, fees for completed work phases are non-refundable.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Trillion Apps Technology shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Continued use of our services constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* Section 8 - Contact Information */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="text-purple-500 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="text-gray-700 text-sm">A- 402 KPH COLONY, HYDERABAD,<br />Telangana, India - 500073</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-purple-500 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-gray-700 text-sm">hr-manager@abcocomputers.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-purple-500 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="text-gray-700 text-sm">8247596534</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy Section */}
          <div className="mt-16">
            {/* Data Protection Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
                Data Protection
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
            <p className="text-gray-500 mb-6">Last Updated: October 24, 2023</p>

            <p className="text-gray-600 leading-relaxed mb-8">
              At Trillion Apps Technology, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Information We Collect</h3>
                <p className="text-gray-600 leading-relaxed">
                  We collect information you provide directly to us, such as your name, email address, phone number, and project details when you request a quote or contact us.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. How We Use Your Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your information is used to provide, maintain, and improve our services, communicate with you about your projects, and send you technical notices or administrative messages.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Information Protection</h3>
                <p className="text-gray-600 leading-relaxed">
                  We implement industry-standard security measures to maintain the safety of your personal information when you enter, submit, or access your data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">4. Sharing of Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except to provide requested services or when required by law.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">5. Cookies</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our website uses cookies to enhance user experience and gather data about site traffic and interaction so that we can offer better site experiences in the future.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">6. Third-Party Links</h3>
                <p className="text-gray-600 leading-relaxed">
                  Occasionally, we may include links to third-party websites. These sites have separate and independent privacy policies. We have no responsibility for the content of these linked sites.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">7. Your Rights</h3>
                <p className="text-gray-600 leading-relaxed">
                  You have the right to access, update, or delete the personal information we have on you. Please contact us if you wish to exercise these rights.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">8. Updates</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;
