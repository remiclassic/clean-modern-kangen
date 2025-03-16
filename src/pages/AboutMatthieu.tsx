
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { CustomButton } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, MessageCircle, HeartHandshake, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const AboutMatthieu: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 pt-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
                Your Kangen Water Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Meet <span className="gradient-text">Matthieu Couture</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                With years of experience and a passion for health and wellness, Matthieu is dedicated to helping you understand the benefits of Kangen Water and find the perfect solution for your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact">
                  <CustomButton size="lg">
                    Connect with Matthieu
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </CustomButton>
                </Link>
                <a href="tel:647-884-4427">
                  <CustomButton variant="secondary" size="lg">
                    Call Directly: 647-884-4427
                  </CustomButton>
                </a>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{animationDelay: "200ms"}}>
              <div className="bg-kangen-50 rounded-2xl p-6 border border-kangen-100 shadow-xl">
                <img 
                  src="https://placehold.co/500x600/e0f2fe/075985?text=Matthieu+Couture" 
                  alt="Matthieu Couture" 
                  className="w-full h-auto rounded-xl object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-lg">
                  <h3 className="font-semibold text-lg mb-1">Matthieu Couture</h3>
                  <p className="text-kangen-700 font-medium">Kangen Water Specialist</p>
                  <p className="text-gray-600 mt-1">Toronto / Montreal, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How Matthieu Helps Section */}
        <section className="py-16 bg-kangen-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
                Personalized Support
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How Matthieu Will <span className="gradient-text">Help You</span>
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-700">
                From answering your questions to helping you select the right Kangen Water machine, Matthieu is committed to providing exceptional service at every step.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-kangen-100 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-kangen-100 rounded-full flex items-center justify-center text-kangen-700 mb-4">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Answer All Your Questions</h3>
                  <p className="text-gray-700">
                    Matthieu will take the time to address all your questions and concerns about Kangen Water technology, benefits, and how it can help improve your health and wellbeing.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-kangen-100 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-kangen-100 rounded-full flex items-center justify-center text-kangen-700 mb-4">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Product Selection Guidance</h3>
                  <p className="text-gray-700">
                    Get personalized recommendations based on your specific needs, budget, and lifestyle. Matthieu will help you choose the perfect Kangen Water system for your home or business.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-kangen-100 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-kangen-100 rounded-full flex items-center justify-center text-kangen-700 mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                  <p className="text-gray-700">
                    Your journey doesn't end after purchase. Matthieu provides continued support, ensuring you get the most out of your Kangen Water system and addressing any questions that arise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Why Choose Matthieu */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-up">
                <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
                  Why Choose Matthieu
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Your Trusted <span className="gradient-text">Kangen Water Expert</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Matthieu's commitment to health, wellness, and exceptional customer service makes him the ideal partner for your Kangen Water journey.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-kangen-600 flex-shrink-0 mt-1 w-5 h-5" />
                    <span className="text-gray-700">Extensive knowledge of Kangen Water technology and benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-kangen-600 flex-shrink-0 mt-1 w-5 h-5" />
                    <span className="text-gray-700">Personalized consultation tailored to your specific needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-kangen-600 flex-shrink-0 mt-1 w-5 h-5" />
                    <span className="text-gray-700">Prompt and helpful responses to all inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-kangen-600 flex-shrink-0 mt-1 w-5 h-5" />
                    <span className="text-gray-700">Bilingual support in English and French</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-kangen-600 flex-shrink-0 mt-1 w-5 h-5" />
                    <span className="text-gray-700">Serving clients throughout Toronto, Montreal, and beyond</span>
                  </li>
                </ul>
                
                <Link to="/testimonials">
                  <CustomButton variant="outline" size="lg">
                    Read Client Testimonials
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </CustomButton>
                </Link>
              </div>
              
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 animate-fade-in-up" style={{animationDelay: "200ms"}}>
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://placehold.co/400x500/e0f2fe/075985?text=Kangen+Demo" 
                    alt="Matthieu demonstrating Kangen Water" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden mt-6">
                  <img 
                    src="https://placehold.co/400x500/e0f2fe/075985?text=Customer+Service" 
                    alt="Matthieu providing customer service" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Matthieu Section */}
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
};

export default AboutMatthieu;
