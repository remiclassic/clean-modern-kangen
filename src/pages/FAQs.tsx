
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const faqItems = [
  {
    id: 1,
    question: 'What is Kangen Water®?',
    answer: 'Kangen Water® is alkaline, ionized water produced by Enagic's Kangen Water® machines. The process of electrolysis restructures the water molecules, making them more easily absorbed by the body while also creating water with a higher pH level and antioxidant properties.'
  },
  {
    id: 2,
    question: 'How is Kangen Water® different from regular water?',
    answer: 'Unlike regular tap or bottled water, Kangen Water® is ionized through electrolysis, which gives it three distinct properties: it's alkaline (high pH), contains active hydrogen (antioxidant), and has micro-clustering (smaller molecular clusters for better hydration).'
  },
  {
    id: 3,
    question: 'How much Kangen Water® should I drink daily?',
    answer: 'We recommend starting with 1-2 glasses daily and gradually increasing to 8-10 glasses per day. It's important to begin slowly to allow your body to adjust to the hydration and detoxification effects.'
  },
  {
    id: 4,
    question: 'What pH levels does a Kangen Water® machine produce?',
    answer: 'Our machines typically produce various pH levels ranging from 2.5 to 11.5, each serving different purposes, from drinking water (8.5-9.5 pH) to cleaning water (11.5 pH) and sanitizing water (2.5 pH).'
  },
  {
    id: 5,
    question: 'How long does a Kangen Water® machine last?',
    answer: 'With proper care and maintenance, our Kangen Water® machines are designed to last 15-20 years or more. Enagic builds machines with high-quality materials and exceptional craftsmanship.'
  },
  {
    id: 6,
    question: 'Is there a warranty on Kangen Water® machines?',
    answer: 'Yes, all our machines come with a 5-year warranty. Extended warranty options are also available for purchase.'
  },
  {
    id: 7,
    question: 'How often should I clean my Kangen Water® machine?',
    answer: 'We recommend a light cleaning once a week and a deep cleaning with our E-Cleaner solution once every 3-6 months, depending on your water hardness and usage frequency.'
  },
  {
    id: 8,
    question: 'Are there financing options available?',
    answer: 'Yes, we offer several flexible financing options to make owning a Kangen Water® machine accessible to everyone. Contact us for details on current financing programs.'
  }
];

const FAQs = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
              Common Questions
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Kangen Water®, our products, and the revolutionary benefits of hydrogen-rich ionized water.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={`item-${item.id}`} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is ready to help you with any questions you might have about our products, technology, or the benefits of Kangen Water®.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-kangen-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-kangen-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQs;
