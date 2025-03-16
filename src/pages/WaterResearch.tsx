
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { FileText, Beaker, Microscope, BookOpen } from 'lucide-react';

const researchItems = [
  {
    id: 1,
    title: 'Molecular Hydrogen and Its Potential in Medicine',
    authors: 'Dr. Sarah Chen, Dr. Michael Robinson',
    date: 'June 2022',
    summary: 'A comprehensive review of over 500 scientific studies on molecular hydrogen (H₂) and its therapeutic potential across various medical conditions.',
    icon: <Microscope className="w-8 h-8 text-kangen-600" />
  },
  {
    id: 2,
    title: 'Effects of Alkaline Ionized Water on Athletic Performance',
    authors: 'Dr. James Parker, Dr. Lisa Thompson',
    date: 'October 2021',
    summary: 'Double-blind study examining the effects of alkaline ionized water on hydration status, performance metrics, and recovery in elite athletes.',
    icon: <Beaker className="w-8 h-8 text-kangen-600" />
  },
  {
    id: 3,
    title: 'Ionized Water and Gastrointestinal Health',
    authors: 'Dr. Elena Martinez, Dr. Robert Kim',
    date: 'March 2021',
    summary: 'Research examining the potential benefits of drinking electrolyzed reduced water on digestive function and gut microbiome composition.',
    icon: <FileText className="w-8 h-8 text-kangen-600" />
  },
  {
    id: 4,
    title: 'Oxidative Stress Reduction Through Hydrogen-Rich Water',
    authors: 'Dr. Thomas Wilson, Dr. Jessica Brown',
    date: 'August 2020',
    summary: 'Clinical study measuring biomarkers of oxidative stress before and after regular consumption of hydrogen-rich water over a 12-week period.',
    icon: <BookOpen className="w-8 h-8 text-kangen-600" />
  }
];

const WaterResearch = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
              Scientific Evidence
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Water Research & Studies</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the growing body of scientific research on ionized water, molecular hydrogen, and the potential health benefits of Kangen Water®.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid grid-cols-1 gap-10">
              {researchItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-start">
                    <div className="mr-6 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-kangen-600 font-medium mb-1">{item.authors}</p>
                      <p className="text-gray-500 text-sm mb-3">{item.date}</p>
                      <p className="text-gray-600 mb-4">{item.summary}</p>
                      <button className="text-kangen-600 font-medium hover:text-kangen-700 transition-colors">
                        Read Full Research Paper →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-kangen-600 to-kangen-700 rounded-2xl p-10 text-white max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Stay Updated with the Latest Research</h3>
              <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                Sign up to receive notifications when new studies and research papers about hydrogen-rich ionized water are published.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-kangen-300"
                />
                <button className="bg-white text-kangen-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WaterResearch;
