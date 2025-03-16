
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-10">
            <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="mb-4">Last Updated: June 2023</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">General Information</h2>
              <p>
                The information provided on the Kangen Water website is for general informational and educational 
                purposes only. While we strive to provide accurate and up-to-date information, we make no 
                representations or warranties of any kind, express or implied, about the completeness, accuracy, 
                reliability, suitability, or availability of the information, products, services, or related 
                graphics contained on the website.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Medical Disclaimer</h2>
              <p>
                The information on this website is not intended to be a substitute for professional medical advice, 
                diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider 
                with any questions you may have regarding a medical condition. Never disregard professional medical 
                advice or delay in seeking it because of something you have read on this website.
              </p>
              <p className="mt-4">
                Kangen Water does not claim to diagnose, treat, cure, or prevent any disease. Our water ionization 
                systems are not medical devices and are not intended to help treat or cure any disease or medical 
                condition. The testimonials on our website are individual experiences, reflecting real life experiences 
                of those who have used our products. They are individual results and results may vary.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Financial Disclaimer</h2>
              <p>
                Any financial information provided on this website, including information about our business 
                opportunity program, is for general information purposes only. It is not intended as financial or 
                investment advice. Results will vary, and we do not guarantee that you will achieve the same or 
                similar results as those portrayed in testimonials or marketing materials.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">External Links</h2>
              <p>
                Our website may contain links to external websites that are not provided or maintained by us. 
                We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on 
                these external websites.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Changes to the Disclaimer</h2>
              <p>
                We may update this disclaimer from time to time. We encourage users to frequently check this page 
                for any changes. Your continued use of this website after changes are posted constitutes your 
                acceptance of the updated disclaimer.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Contact Information</h2>
              <p>
                If you have any questions about this disclaimer, please contact us at:
                <br /><br />
                Email: info@kangenwater.com<br />
                Phone: (888) 123-4567<br />
                Address: 123 Water Way, Suite 100, Hydration City, CA 90000
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
