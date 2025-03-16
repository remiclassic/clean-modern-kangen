
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';
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
    answer: 'Kangen Water® is alkaline, ionized water produced by Enagic\'s Kangen Water® machines. The process of electrolysis restructures the water molecules, making them more easily absorbed by the body while also creating water with a higher pH level and antioxidant properties.'
  },
  {
    id: 2,
    question: 'How is Kangen Water® different from regular water?',
    answer: 'Unlike regular tap or bottled water, Kangen Water® is ionized through electrolysis, which gives it three distinct properties: it\'s alkaline (high pH), contains active hydrogen (antioxidant), and has micro-clustering (smaller molecular clusters for better hydration).'
  },
  {
    id: 3,
    question: 'How much Kangen Water® should I drink daily?',
    answer: 'We recommend starting with 1-2 glasses daily and gradually increasing to 8-10 glasses per day. It\'s important to begin slowly to allow your body to adjust to the hydration and detoxification effects.'
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

const frenchFaqItems = [
  {
    id: 1,
    question: 'Qu\'est-ce que l\'eau Kangen®?',
    answer: 'L\'eau Kangen® est une eau alcaline et ionisée produite par les machines Kangen Water® d\'Enagic. Le processus d\'électrolyse restructure les molécules d\'eau, les rendant plus facilement absorbables par le corps tout en créant une eau avec un niveau de pH plus élevé et des propriétés antioxydantes.'
  },
  {
    id: 2,
    question: 'En quoi l\'eau Kangen® est-elle différente de l\'eau ordinaire?',
    answer: 'Contrairement à l\'eau du robinet ou à l\'eau en bouteille, l\'eau Kangen® est ionisée par électrolyse, ce qui lui confère trois propriétés distinctes: elle est alcaline (pH élevé), contient de l\'hydrogène actif (antioxydant) et présente une micro-structuration (clusters moléculaires plus petits pour une meilleure hydratation).'
  },
  {
    id: 3,
    question: 'Quelle quantité d\'eau Kangen® dois-je boire quotidiennement?',
    answer: 'Nous recommandons de commencer par 1-2 verres par jour et d\'augmenter progressivement jusqu\'à 8-10 verres par jour. Il est important de commencer lentement pour permettre à votre corps de s\'adapter aux effets d\'hydratation et de détoxification.'
  },
  {
    id: 4,
    question: 'Quels niveaux de pH une machine Kangen Water® produit-elle?',
    answer: 'Nos machines produisent généralement différents niveaux de pH allant de 2,5 à 11,5, chacun servant à différents usages, de l\'eau potable (pH 8,5-9,5) à l\'eau de nettoyage (pH 11,5) et l\'eau désinfectante (pH 2,5).'
  },
  {
    id: 5,
    question: 'Quelle est la durée de vie d\'une machine Kangen Water®?',
    answer: 'Avec un entretien et une maintenance appropriés, nos machines Kangen Water® sont conçues pour durer 15-20 ans ou plus. Enagic fabrique des machines avec des matériaux de haute qualité et un savoir-faire exceptionnel.'
  },
  {
    id: 6,
    question: 'Y a-t-il une garantie sur les machines Kangen Water®?',
    answer: 'Oui, toutes nos machines sont livrées avec une garantie de 5 ans. Des options de garantie prolongée sont également disponibles à l\'achat.'
  },
  {
    id: 7,
    question: 'À quelle fréquence dois-je nettoyer ma machine Kangen Water®?',
    answer: 'Nous recommandons un nettoyage léger une fois par semaine et un nettoyage en profondeur avec notre solution E-Cleaner une fois tous les 3-6 mois, selon la dureté de votre eau et la fréquence d\'utilisation.'
  },
  {
    id: 8,
    question: 'Y a-t-il des options de financement disponibles?',
    answer: 'Oui, nous proposons plusieurs options de financement flexibles pour rendre l\'acquisition d\'une machine Kangen Water® accessible à tous. Contactez-nous pour plus de détails sur les programmes de financement actuels.'
  }
];

const FAQs = () => {
  const { t, language } = useLanguage();
  const items = language === 'en' ? faqItems : frenchFaqItems;

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
              {t('pages.faqs.commonQuestions')}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('pages.faqs.title')}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('pages.faqs.subtitle')}
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {items.map((item) => (
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
            <h3 className="text-2xl font-bold mb-4">{t('pages.faqs.stillHaveQuestions')}</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('pages.faqs.stillHaveQuestionsText')}
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-kangen-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-kangen-700 transition-colors"
            >
              {t('pages.faqs.contactUs')}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQs;
