
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-10">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="mb-4">Last Updated: June 2023</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing this site.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Kangen Water's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Product Information</h2>
              <p>
                The products and information provided on this website are intended for educational purposes only. 
                The information is not intended to replace medical advice or treatment. Please consult with a 
                healthcare professional before using our products if you have any medical conditions or concerns.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Accuracy of Materials</h2>
              <p>
                The materials appearing on Kangen Water's website could include technical, typographical, or 
                photographic errors. We do not warrant that any of the materials on its website are accurate, 
                complete or current. We may make changes to the materials contained on its website at any time 
                without notice.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Links</h2>
              <p>
                Kangen Water has not reviewed all of the sites linked to its website and is not responsible for 
                the contents of any such linked site. The inclusion of any link does not imply endorsement by 
                Kangen Water of the site. Use of any such linked website is at the user's own risk.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Modifications</h2>
              <p>
                Kangen Water may revise these terms of service for its website at any time without notice. By 
                using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws and you 
                irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br /><br />
                Email: terms@kangenwater.com<br />
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

export default Terms;
