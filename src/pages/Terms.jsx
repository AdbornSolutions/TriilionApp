import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';

const Terms = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully"
        backgroundImage="/assets/terms-hero.jpg"
        overlay={true}
      />

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Terms & Conditions"
            subtitle="Last updated: March 1, 2024"
            centered={true}
          />

          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing and using the services of TrillionApp Technologies ("we," "us," or "our"), 
                you accept and agree to be bound by these Terms and Conditions ("Terms"). If you do not 
                agree to these Terms, please do not use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use our website, 
                services, or products (collectively, the "Service").
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TrillionApp Technologies provides IT solutions and services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>Web Development and Design</li>
                <li>Mobile Application Development</li>
                <li>ERP Development and Implementation</li>
                <li>Digital Marketing Services</li>
                <li>Software Consulting and Support</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>Provide accurate and complete information when using our services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with or disrupt our services or servers</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content, features, and functionality of our services, including but not limited to text, 
                graphics, logos, icons, images, audio clips, digital downloads, and software, are the property 
                of TrillionApp Technologies or its content suppliers and are protected by international copyright, 
                trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You are granted a limited license to access and use our services for personal, non-commercial 
                purposes. This license does not include any resale or commercial use of our services.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For paid services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>All fees are payable in advance unless otherwise agreed in writing</li>
                <li>We reserve the right to change our pricing at any time</li>
                <li>Refunds are subject to our refund policy as outlined in service agreements</li>
                <li>Late payments may result in suspension of services</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We respect your privacy and are committed to protecting the confidentiality of your information. 
                Our Privacy Policy outlines how we collect, use, and safeguard your data.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You agree not to disclose any confidential or proprietary information that you may obtain 
                through our services without our prior written consent.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM 
                ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                IN NO EVENT SHALL TRILLIONAPP TECHNOLOGIES, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE 
                LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, 
                INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER 
                INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF OUR SERVICES.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless TrillionApp Technologies and its affiliates, 
                officers, directors, employees, and agents from and against any and all claims, liabilities, 
                damages, losses, or expenses, including reasonable legal fees, arising out of or in any way 
                connected with your use of our services, your violation of these Terms, or your infringement 
                of any third-party rights.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice or 
                liability, for any reason, including if you breach these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use our services will immediately cease. All provisions of 
                these Terms which by their nature should survive termination shall survive termination.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a 
                revision is material, we will provide at least 30 days' notice prior to any new terms taking 
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, without 
                regard to its conflict of law provisions. Any disputes arising out of or in connection with 
                these Terms shall be subject to the exclusive jurisdiction of the courts located in the 
                jurisdiction where TrillionApp Technologies is headquartered.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@trillionapp.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 9876543210</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Business Street, Tech City, India 123456</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;
