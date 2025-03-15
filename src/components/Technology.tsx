import React from 'react';
import { CustomButton } from './ui/Button';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="bg-gradient-to-b from-white to-kangen-50/50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
            Revolutionary Innovation
          </span>
          <h2 className="section-title">Advanced <span className="gradient-text">Technology</span></h2>
          <p className="section-subtitle">
            Our proprietary electrolysis technology transforms ordinary tap water into hydrogen-rich ionized water with precise pH control
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Kangen Water Technology" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-kangen-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-kangen-200 rounded-full -z-10"></div>
            </div>
            
            <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/XmVUg3ZviGE" 
                  title="Kangen Water Technology" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in-up">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Platinum-Coated Titanium Plates</h3>
              <p className="text-muted-foreground">
                Our machines use durable platinum-coated titanium plates for electrolysis, ensuring longevity and optimal performance. More plates mean stronger ionization potential.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Continuous Ionized Water Generation</h3>
              <p className="text-muted-foreground">
                Unlike batch-type ionizers, our technology allows for continuous flow, providing fresh ionized water whenever you need it without waiting.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Precise pH Control</h3>
              <p className="text-muted-foreground">
                Select from multiple water types with precise pH levels for different applications, from drinking and cooking to cleaning and beauty care.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Self-Cleaning System</h3>
              <p className="text-muted-foreground">
                Our advanced machines feature automatic cleaning cycles that help maintain optimal performance and extend the life of your investment.
              </p>
            </div>
            
            <CustomButton size="lg">
              Learn More About Our Technology
            </CustomButton>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 text-center shadow-sm animate-fade-in-up">
            <div className="text-4xl font-bold text-kangen-700 mb-2">7+</div>
            <div className="text-lg font-medium">Water Types</div>
            <p className="text-sm text-muted-foreground mt-2">From acidic to highly alkaline</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 text-center shadow-sm animate-fade-in-up" style={{animationDelay: "100ms"}}>
            <div className="text-4xl font-bold text-kangen-700 mb-2">20+</div>
            <div className="text-lg font-medium">Years of Research</div>
            <p className="text-sm text-muted-foreground mt-2">Pioneering water ionization</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 text-center shadow-sm animate-fade-in-up" style={{animationDelay: "200ms"}}>
            <div className="text-4xl font-bold text-kangen-700 mb-2">5+</div>
            <div className="text-lg font-medium">Patents</div>
            <p className="text-sm text-muted-foreground mt-2">Proprietary technology</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 text-center shadow-sm animate-fade-in-up" style={{animationDelay: "300ms"}}>
            <div className="text-4xl font-bold text-kangen-700 mb-2">ORP</div>
            <div className="text-lg font-medium">Negative Potential</div>
            <p className="text-sm text-muted-foreground mt-2">Powerful antioxidant properties</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
