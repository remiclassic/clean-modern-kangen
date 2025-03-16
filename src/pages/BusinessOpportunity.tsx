
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CustomButton } from '@/components/ui/custom-button';
import { BarChart, CheckCircle, DollarSign, Users, TrendingUp, Award } from 'lucide-react';
import GetStartedModal from '@/components/GetStartedModal';
import { useLanguage } from '@/context/LanguageContext';

const BusinessOpportunity = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-kangen-600 to-kangen-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">{t('pages.businessOpportunity.title')}</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                {t('pages.businessOpportunity.subtitle')}
              </p>
              <GetStartedModal>
                <CustomButton size="lg" className="mt-4">
                  {t('pages.businessOpportunity.getStarted')}
                </CustomButton>
              </GetStartedModal>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t('pages.businessOpportunity.whyChoose')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <DollarSign className="w-12 h-12 text-kangen-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lucrative Compensation</h3>
                <p className="text-gray-600">
                  Earn substantial commissions with our generous 8-point compensation plan designed to reward your efforts at every level.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <Users className="w-12 h-12 text-kangen-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Growing Market</h3>
                <p className="text-gray-600">
                  Tap into the expanding health and wellness industry with a product that genuinely improves people's lives.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <TrendingUp className="w-12 h-12 text-kangen-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Business Model</h3>
                <p className="text-gray-600">
                  Follow our established system that has created success stories worldwide through direct sales and referrals.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <Award className="w-12 h-12 text-kangen-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Premium Product</h3>
                <p className="text-gray-600">
                  Represent a high-quality, Japanese-engineered water ionizer with medical-grade certification and proven benefits.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <BarChart className="w-12 h-12 text-kangen-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Training & Support</h3>
                <p className="text-gray-600">
                  Access comprehensive training, marketing materials, and ongoing support from an experienced team.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
                <CheckCircle className="w-12 h-12 text-kangen-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Residual Income</h3>
                <p className="text-gray-600">
                  Build a sustainable business with recurring revenue streams as your customer and distributor network grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t('pages.businessOpportunity.howWorks')}</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="bg-kangen-100 rounded-full w-16 h-16 flex items-center justify-center text-kangen-600 font-bold text-xl mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Become a Distributor</h3>
                  <p className="text-gray-600">
                    Join our team as an independent distributor with a small investment to access training, marketing materials, and your business dashboard.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="bg-kangen-100 rounded-full w-16 h-16 flex items-center justify-center text-kangen-600 font-bold text-xl mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Learn About the Products</h3>
                  <p className="text-gray-600">
                    Complete our comprehensive training to become an expert on Kangen Water technology, benefits, and the various machine models.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="bg-kangen-100 rounded-full w-16 h-16 flex items-center justify-center text-kangen-600 font-bold text-xl mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Share the Benefits</h3>
                  <p className="text-gray-600">
                    Introduce family, friends, and your network to the benefits of Kangen Water through demonstrations, social media, and community events.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="bg-kangen-100 rounded-full w-16 h-16 flex items-center justify-center text-kangen-600 font-bold text-xl mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build Your Team</h3>
                  <p className="text-gray-600">
                    Expand your business by recruiting and training new distributors, creating multiple streams of income through our 8-point compensation plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t('pages.businessOpportunity.successStories')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <p className="text-gray-600 italic">
                    "Becoming a Kangen Water distributor changed my life. Not only am I helping others improve their health, but I've also built a sustainable business that provides financial freedom for my family."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-kangen-200 rounded-full flex items-center justify-center text-kangen-600 font-bold mr-4">
                    JS
                  </div>
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-gray-500">Diamond Distributor</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <p className="text-gray-600 italic">
                    "I started as a customer who loved the product, and now I lead a team of over 100 distributors. The training and support have been exceptional, making this business opportunity truly accessible."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-kangen-200 rounded-full flex items-center justify-center text-kangen-600 font-bold mr-4">
                    ML
                  </div>
                  <div>
                    <p className="font-semibold">Maria Lopez</p>
                    <p className="text-sm text-gray-500">Platinum Distributor</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <p className="text-gray-600 italic">
                    "What I love most about this business is the flexibility. I can work on my own terms while making a positive impact. The compensation plan is generous and rewards consistent effort."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-kangen-200 rounded-full flex items-center justify-center text-kangen-600 font-bold mr-4">
                    DW
                  </div>
                  <div>
                    <p className="font-semibold">David Williams</p>
                    <p className="text-sm text-gray-500">Gold Distributor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-kangen-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">{t('pages.businessOpportunity.readyToStart')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('pages.businessOpportunity.readyToStartText')}
            </p>
            <GetStartedModal>
              <CustomButton 
                variant="secondary" 
                size="lg" 
                className="bg-white text-kangen-700 hover:bg-gray-100 shadow-lg"
              >
                {t('pages.businessOpportunity.becomeDistributor')}
              </CustomButton>
            </GetStartedModal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">{t('pages.businessOpportunity.faqTitle')}</h2>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-3">How much does it cost to become a distributor?</h3>
                <p className="text-gray-600">
                  The initial investment is minimal and includes your distributor kit, training materials, and access to our business platform. Contact us for current pricing details.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-3">Do I need to keep inventory?</h3>
                <p className="text-gray-600">
                  No, you don't need to purchase or store inventory. Our company handles all product fulfillment, shipping, and customer service for your sales.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-3">How do I get paid?</h3>
                <p className="text-gray-600">
                  You earn commissions through our 8-point compensation plan, which includes direct sales commissions, team bonuses, and leadership rewards. Payments are deposited directly into your account.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-3">Is training provided?</h3>
                <p className="text-gray-600">
                  Yes, comprehensive training is provided through online courses, webinars, in-person events, and mentorship from experienced distributors in your upline.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-xl font-semibold mb-3">Can I do this part-time?</h3>
                <p className="text-gray-600">
                  Absolutely. Many of our successful distributors started part-time while maintaining their regular jobs, gradually transitioning to full-time as their business grew.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessOpportunity;
