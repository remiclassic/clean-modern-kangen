
import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from './ui/FeatureCard';
import { Droplet, Heart, Zap, RefreshCw, Shield, Sparkles } from 'lucide-react';
import { staggerContainer, staggerItems } from '@/utils/animations';
import { useLanguage } from '@/context/LanguageContext';

const Benefits: React.FC = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      id: 1,
      title: t('benefits.superiorHydration'),
      description: t('benefits.superiorHydrationText'),
      icon: <Droplet className="w-6 h-6" />
    },
    {
      id: 2,
      title: t('benefits.antioxidant'),
      description: t('benefits.antioxidantText'),
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 3,
      title: t('benefits.phBalance'),
      description: t('benefits.phBalanceText'),
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      id: 4,
      title: t('benefits.enhancedEnergy'),
      description: t('benefits.enhancedEnergyText'),
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 5,
      title: t('benefits.optimalHealth'),
      description: t('benefits.optimalHealthText'),
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 6,
      title: t('benefits.improvedTaste'),
      description: t('benefits.improvedTasteText'),
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <section id="benefits" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
            {t('benefits.tag')}
          </span>
          <h2 className="section-title">{t('benefits.title')} <span className="gradient-text">{t('benefits.titleHighlight')}</span></h2>
          <p className="section-subtitle">
            {t('benefits.description')}
          </p>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.id}
              variants={staggerItems}
              custom={index}
            >
              <FeatureCard 
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
              alt="Crystal clear ocean waves" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{t('benefits.transform')} <span className="gradient-text">{t('benefits.transformHighlight')}</span></h3>
            <p className="text-muted-foreground mb-6">
              {t('benefits.transformDescription')}
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kangen-100 flex items-center justify-center">
                  <span className="text-kangen-700 font-medium">1</span>
                </div>
                <p>{t('benefits.step1')}</p>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kangen-100 flex items-center justify-center">
                  <span className="text-kangen-700 font-medium">2</span>
                </div>
                <p>{t('benefits.step2')}</p>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kangen-100 flex items-center justify-center">
                  <span className="text-kangen-700 font-medium">3</span>
                </div>
                <p>{t('benefits.step3')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
