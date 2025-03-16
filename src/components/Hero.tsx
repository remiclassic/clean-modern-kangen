
import React, { useEffect, useRef } from 'react';
import { CustomButton } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const heroElement = heroRef.current;
    const imageElement = imageRef.current;
    
    if (!heroElement || !imageElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 20 - 10;
      const y = (clientY / window.innerHeight) * 20 - 10;
      
      imageElement.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    };

    heroElement.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToTechnology = () => {
    const technologySection = document.getElementById('technology');
    if (technologySection) {
      technologySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={imageRef}
          className="absolute right-0 top-1/4 w-full h-full transform translate-x-1/4 -translate-y-1/4 opacity-80 transition-transform duration-300 ease-out"
        >
          <div className="blob absolute w-[600px] h-[600px] bg-kangen-100/60 top-0 right-0"></div>
          <div className="blob absolute w-[500px] h-[500px] bg-kangen-200/50 top-20 right-20 animation-delay-1000"></div>
          <div className="blob absolute w-[400px] h-[400px] bg-kangen-300/40 top-40 right-40 animation-delay-2000"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-6">
              {t('hero.tag')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              {t('hero.title')}
              <span className="gradient-text block">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <CustomButton size="lg" className="group" onClick={scrollToProducts}>
                {t('hero.exploreProducts')}
                <ArrowRight className="ml-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </CustomButton>
              <CustomButton variant="outline" size="lg" onClick={scrollToTechnology}>
                {t('hero.learnMore')}
              </CustomButton>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-kangen-700">7+</div>
                <div className="text-sm text-muted-foreground">{t('hero.phLevels')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-kangen-700">40+</div>
                <div className="text-sm text-muted-foreground">{t('hero.countries')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-kangen-700">5M+</div>
                <div className="text-sm text-muted-foreground">{t('hero.customers')}</div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square animate-float">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                alt="Crystal clear water flowing through nature" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-kangen-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-kangen-200 rounded-full -z-10"></div>
            </div>
            
            {/* Video Embed */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/C9COkslDijs" 
                  title="Kangen Water Introduction" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#f0f9ff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
