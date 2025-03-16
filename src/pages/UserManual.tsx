
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Download, File, FileText, Book } from 'lucide-react';

const manuals = [
  {
    id: 1,
    title: 'K8 User Manual',
    description: 'Complete guide to set up, use, and maintain your K8 Kangen Water® machine.',
    fileSize: '3.2 MB',
    pages: 42,
    icon: <FileText className="w-12 h-12 text-kangen-600" />
  },
  {
    id: 2,
    title: 'SD501 User Manual',
    description: 'Detailed instructions for operation and maintenance of the SD501 model.',
    fileSize: '2.8 MB',
    pages: 38,
    icon: <FileText className="w-12 h-12 text-kangen-600" />
  },
  {
    id: 3,
    title: 'R Model Quick Start Guide',
    description: 'Get up and running quickly with your R model Kangen Water® machine.',
    fileSize: '1.5 MB',
    pages: 20,
    icon: <File className="w-12 h-12 text-kangen-600" />
  },
  {
    id: 4,
    title: 'Maintenance Guide',
    description: 'Best practices for cleaning and maintaining your Kangen Water® machine.',
    fileSize: '2.1 MB',
    pages: 24,
    icon: <Book className="w-12 h-12 text-kangen-600" />
  }
];

const UserManual = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
              Product Resources
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">User Manuals & Guides</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download user manuals, guides, and resources for your Kangen Water® machine to ensure optimal performance and longevity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {manuals.map((manual, index) => (
              <motion.div 
                key={manual.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      {manual.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{manual.title}</h3>
                      <p className="text-gray-600 mb-3">{manual.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="mr-4">PDF • {manual.fileSize}</span>
                        <span>{manual.pages} pages</span>
                      </div>
                      <button className="flex items-center text-kangen-600 font-medium hover:text-kangen-700 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-kangen-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Need Technical Support?</h3>
              <p className="text-gray-600">
                Our customer support team is available to assist you with any technical questions or issues.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-kangen-600 text-white text-center font-medium px-6 py-3 rounded-lg hover:bg-kangen-700 transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="#faq" 
                className="bg-white text-kangen-600 text-center font-medium px-6 py-3 rounded-lg border border-kangen-600 hover:bg-kangen-50 transition-colors"
              >
                View FAQs
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UserManual;
