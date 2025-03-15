
import React from 'react';
import { FeatureCard } from './ui/FeatureCard';
import { Droplet, Heart, Zap, RefreshCw, Shield, Sparkles } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Superior Hydration',
    description: 'Micro-clustered water molecules penetrate cells more effectively for enhanced hydration.',
    icon: <Droplet className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Antioxidant Power',
    description: 'Rich in molecular hydrogen, a powerful antioxidant that helps neutralize harmful free radicals.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'pH Balance',
    description: 'Multiple pH settings allow you to choose the perfect alkalinity level for your specific needs.',
    icon: <RefreshCw className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'Enhanced Energy',
    description: 'Many users report increased energy levels and improved overall vitality with regular consumption.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 5,
    title: 'Optimal Health',
    description: 'Supports your body\'s natural functions and helps maintain proper pH balance.',
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 6,
    title: 'Improved Taste',
    description: 'Experience the clean, refreshing taste of properly filtered and ionized water.',
    icon: <Sparkles className="w-6 h-6" />
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
            Discover The Advantages
          </span>
          <h2 className="section-title">Experience the <span className="gradient-text">Benefits</span></h2>
          <p className="section-subtitle">
            Kangen Water® machines produce ionized alkaline and acidic waters through electrolysis, offering various benefits for drinking, cooking, beauty, and cleaning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <FeatureCard 
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className="animate-fade-in-up"
              style={{ animationDelay: `${benefit.id * 100}ms` }}
            />
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1616923048805-5e0d9885957b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Happy Kangen Water User" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="animate-fade-in-up delay-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Transform Your Life with <span className="gradient-text">Kangen Water®</span></h3>
            <p className="text-muted-foreground mb-6">
              Kangen Water® isn't just about hydration—it's about transforming your approach to health and wellness. With its unique properties and versatile applications, Kangen Water® has helped millions of people worldwide improve their quality of life.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kangen-100 flex items-center justify-center">
                  <span className="text-kangen-700 font-medium">1</span>
                </div>
                <p>Start with drinking 8-10 glasses of Kangen Water® daily</p>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kangen-100 flex items-center justify-center">
                  <span className="text-kangen-700 font-medium">2</span>
                </div>
                <p>Use different pH levels for specific applications around your home</p>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kangen-100 flex items-center justify-center">
                  <span className="text-kangen-700 font-medium">3</span>
                </div>
                <p>Experience the difference in how you feel, look, and perform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
