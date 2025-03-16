
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define supported languages
export type Language = 'en' | 'fr';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations: Record<string, string> = {
  // Navbar
  'nav.home': 'Home',
  'nav.products': 'Products',
  'nav.benefits': 'Benefits',
  'nav.technology': 'Technology',
  'nav.resources': 'Resources',
  'nav.opportunity': 'Opportunity',
  'nav.about': 'About Matthieu',
  'nav.contact': 'Contact',
  'nav.getStarted': 'Get Started',
  
  // Hero section
  'hero.tag': 'Innovative Hydration Technology',
  'hero.title': 'Transform Your',
  'hero.titleHighlight': 'Water Experience',
  'hero.description': 'Discover the revolutionary Kangen Water® technology that provides superior hydration, optimal pH levels, and antioxidant properties for healthier living.',
  'hero.exploreProducts': 'Explore Products',
  'hero.learnMore': 'Learn More',
  'hero.phLevels': 'pH Levels',
  'hero.countries': 'Countries',
  'hero.customers': 'Customers',
  
  // Products section
  'products.tag': 'Premium Selection',
  'products.title': 'Discover Our',
  'products.titleHighlight': 'Product Line',
  'products.description': 'Explore our range of innovative water ionizers designed to transform ordinary tap water into extraordinary hydrogen-rich alkaline water',
  'products.learnMore': 'Learn More',
  'products.dialogTitle': 'Kangen Water System',
  'products.dialogDescription': 'Get to know our premium water ionizer.',
  'products.close': 'Close',
  'products.requestInfo': 'Request Info',
  'products.features': 'Features',
  'products.description2': 'The product is designed with state-of-the-art technology to provide you with the healthiest water possible. It features a self-cleaning system and delivers various types of water for different uses in your daily life.',
  'products.warranty': 'Quality Guarantee',
  'products.warrantyDescription': 'Each unit comes with a 5-year manufacturer warranty',
  
  // Benefits section
  'benefits.tag': 'Discover The Advantages',
  'benefits.title': 'Experience the',
  'benefits.titleHighlight': 'Benefits',
  'benefits.description': 'Kangen Water® machines produce ionized alkaline and acidic waters through electrolysis, offering various benefits for drinking, cooking, beauty, and cleaning',
  'benefits.transform': 'Transform Your Life with',
  'benefits.transformHighlight': 'Kangen Water®',
  'benefits.transformDescription': 'Kangen Water® isn\'t just about hydration—it\'s about transforming your approach to health and wellness. With its unique properties and versatile applications, Kangen Water® has helped millions of people worldwide improve their quality of life.',
  'benefits.step1': 'Start with drinking 8-10 glasses of Kangen Water® daily',
  'benefits.step2': 'Use different pH levels for specific applications around your home',
  'benefits.step3': 'Experience the difference in how you feel, look, and perform',
  
  // Technology section
  'technology.tag': 'Revolutionary Innovation',
  'technology.title': 'Advanced',
  'technology.titleHighlight': 'Technology',
  'technology.description': 'Our proprietary electrolysis technology transforms ordinary tap water into hydrogen-rich ionized water with precise pH control',
  'technology.learnMore': 'Learn More About Our Technology',
  'technology.waterTypes': 'Water Types',
  'technology.waterTypesDescription': 'From acidic to highly alkaline',
  'technology.years': 'Years of Research',
  'technology.yearsDescription': 'Pioneering water ionization',
  'technology.patents': 'Patents',
  'technology.patentsDescription': 'Proprietary technology',
  'technology.orp': 'Negative Potential',
  'technology.orpDescription': 'Powerful antioxidant properties',
  
  // Contact section
  'contact.tag': 'Get In Touch',
  'contact.title': 'Ready to',
  'contact.titleHighlight': 'Transform Your Water',
  'contact.description': 'Contact our team of water specialists to learn more about Kangen Water® technology and find the perfect solution for your needs',
  'contact.fullName': 'Full Name',
  'contact.email': 'Email Address',
  'contact.phone': 'Phone Number',
  'contact.subject': 'Subject',
  'contact.message': 'Message',
  'contact.send': 'Send Message',
  'contact.info': 'Contact Information',
  'contact.businessHours': 'Business Hours',
  'contact.mondayFriday': 'Monday - Friday:',
  'contact.saturday': 'Saturday:',
  'contact.sunday': 'Sunday:',
  
  // Footer
  'footer.description': 'Discover the revolutionary water technology that\'s transforming lives worldwide with hydrogen-rich, ionized water.',
  'footer.quickLinks': 'Quick Links',
  'footer.resources': 'Resources',
  'footer.newsletter': 'Newsletter',
  'footer.newsletterDescription': 'Subscribe to receive updates, access to exclusive deals, and more.',
  'footer.emailPlaceholder': 'Your email address',
  'footer.rights': '© 2023 Kangen Water. All rights reserved.',
  'footer.privacy': 'Privacy Policy',
  'footer.terms': 'Terms of Service',
  'footer.disclaimer': 'Disclaimer',
  
  // GetStartedModal
  'modal.title': 'Join the Kangen Water Family',
  'modal.description': 'Choose how you would like to get started with Kangen Water',
  'modal.distributor': 'Become a Distributor',
  'modal.distributorDescription': 'Join our business opportunity and build your own Kangen Water business',
  'modal.demo': 'Request a Demo',
  'modal.demoDescription': 'Schedule a demonstration to see Kangen Water in action',
  'modal.contact': 'Contact Us',
  'modal.contactDescription': 'Email us directly with any questions about our products',
  'modal.support': 'Already a customer?',
  'modal.getSupport': 'Get support',
  'modal.official': 'Visit official website',
  
  // Language
  'language.en': 'English',
  'language.fr': 'French',
};

// French translations
const frTranslations: Record<string, string> = {
  // Navbar
  'nav.home': 'Accueil',
  'nav.products': 'Produits',
  'nav.benefits': 'Avantages',
  'nav.technology': 'Technologie',
  'nav.resources': 'Ressources',
  'nav.opportunity': 'Opportunité',
  'nav.about': 'À propos de Matthieu',
  'nav.contact': 'Contact',
  'nav.getStarted': 'Commencer',
  
  // Hero section
  'hero.tag': 'Technologie d\'Hydratation Innovante',
  'hero.title': 'Transformez Votre',
  'hero.titleHighlight': 'Expérience d\'Eau',
  'hero.description': 'Découvrez la technologie révolutionnaire Kangen Water® qui offre une hydratation supérieure, des niveaux de pH optimaux et des propriétés antioxydantes pour une vie plus saine.',
  'hero.exploreProducts': 'Explorer les Produits',
  'hero.learnMore': 'En Savoir Plus',
  'hero.phLevels': 'Niveaux de pH',
  'hero.countries': 'Pays',
  'hero.customers': 'Clients',
  
  // Products section
  'products.tag': 'Sélection Premium',
  'products.title': 'Découvrez Notre',
  'products.titleHighlight': 'Gamme de Produits',
  'products.description': 'Explorez notre gamme d\'ioniseurs d\'eau innovants conçus pour transformer l\'eau du robinet ordinaire en eau alcaline extraordinaire riche en hydrogène',
  'products.learnMore': 'En Savoir Plus',
  'products.dialogTitle': 'Système d\'Eau Kangen',
  'products.dialogDescription': 'Découvrez notre ioniseur d\'eau premium.',
  'products.close': 'Fermer',
  'products.requestInfo': 'Demander des Infos',
  'products.features': 'Caractéristiques',
  'products.description2': 'Le produit est conçu avec une technologie de pointe pour vous fournir l\'eau la plus saine possible. Il dispose d\'un système d\'auto-nettoyage et fournit différents types d\'eau pour différentes utilisations dans votre vie quotidienne.',
  'products.warranty': 'Garantie de Qualité',
  'products.warrantyDescription': 'Chaque unité est fournie avec une garantie fabricant de 5 ans',
  
  // Benefits section
  'benefits.tag': 'Découvrez Les Avantages',
  'benefits.title': 'Expérimentez les',
  'benefits.titleHighlight': 'Avantages',
  'benefits.description': 'Les machines Kangen Water® produisent des eaux alcalines et acides ionisées par électrolyse, offrant divers avantages pour boire, cuisiner, la beauté et le nettoyage',
  'benefits.transform': 'Transformez Votre Vie avec',
  'benefits.transformHighlight': 'Kangen Water®',
  'benefits.transformDescription': 'Kangen Water® ne concerne pas seulement l\'hydratation—il s\'agit de transformer votre approche de la santé et du bien-être. Avec ses propriétés uniques et ses applications polyvalentes, Kangen Water® a aidé des millions de personnes dans le monde à améliorer leur qualité de vie.',
  'benefits.step1': 'Commencez par boire 8-10 verres d\'eau Kangen® par jour',
  'benefits.step2': 'Utilisez différents niveaux de pH pour des applications spécifiques dans votre maison',
  'benefits.step3': 'Ressentez la différence dans votre sensation, apparence et performance',
  
  // Technology section
  'technology.tag': 'Innovation Révolutionnaire',
  'technology.title': 'Technologie',
  'technology.titleHighlight': 'Avancée',
  'technology.description': 'Notre technologie d\'électrolyse propriétaire transforme l\'eau ordinaire du robinet en eau ionisée riche en hydrogène avec un contrôle précis du pH',
  'technology.learnMore': 'En Savoir Plus Sur Notre Technologie',
  'technology.waterTypes': 'Types d\'Eau',
  'technology.waterTypesDescription': 'De l\'acide à l\'alcalin élevé',
  'technology.years': 'Années de Recherche',
  'technology.yearsDescription': 'Pionnier de l\'ionisation de l\'eau',
  'technology.patents': 'Brevets',
  'technology.patentsDescription': 'Technologie propriétaire',
  'technology.orp': 'Potentiel Négatif',
  'technology.orpDescription': 'Puissantes propriétés antioxydantes',
  
  // Contact section
  'contact.tag': 'Contactez-Nous',
  'contact.title': 'Prêt à',
  'contact.titleHighlight': 'Transformer Votre Eau',
  'contact.description': 'Contactez notre équipe de spécialistes de l\'eau pour en savoir plus sur la technologie Kangen Water® et trouver la solution parfaite pour vos besoins',
  'contact.fullName': 'Nom Complet',
  'contact.email': 'Adresse Email',
  'contact.phone': 'Numéro de Téléphone',
  'contact.subject': 'Sujet',
  'contact.message': 'Message',
  'contact.send': 'Envoyer le Message',
  'contact.info': 'Informations de Contact',
  'contact.businessHours': 'Heures d\'Ouverture',
  'contact.mondayFriday': 'Lundi - Vendredi:',
  'contact.saturday': 'Samedi:',
  'contact.sunday': 'Dimanche:',
  
  // Footer
  'footer.description': 'Découvrez la technologie révolutionnaire de l\'eau qui transforme des vies dans le monde entier avec de l\'eau ionisée riche en hydrogène.',
  'footer.quickLinks': 'Liens Rapides',
  'footer.resources': 'Ressources',
  'footer.newsletter': 'Newsletter',
  'footer.newsletterDescription': 'Abonnez-vous pour recevoir des mises à jour, accéder à des offres exclusives, et plus encore.',
  'footer.emailPlaceholder': 'Votre adresse email',
  'footer.rights': '© 2023 Kangen Water. Tous droits réservés.',
  'footer.privacy': 'Politique de Confidentialité',
  'footer.terms': 'Conditions d\'Utilisation',
  'footer.disclaimer': 'Avertissement',
  
  // GetStartedModal
  'modal.title': 'Rejoignez la Famille Kangen Water',
  'modal.description': 'Choisissez comment vous souhaitez démarrer avec Kangen Water',
  'modal.distributor': 'Devenir Distributeur',
  'modal.distributorDescription': 'Rejoignez notre opportunité d\'affaires et construisez votre propre entreprise Kangen Water',
  'modal.demo': 'Demander une Démo',
  'modal.demoDescription': 'Planifiez une démonstration pour voir Kangen Water en action',
  'modal.contact': 'Contactez-Nous',
  'modal.contactDescription': 'Envoyez-nous un email directement avec vos questions sur nos produits',
  'modal.support': 'Déjà client?',
  'modal.getSupport': 'Obtenir de l\'aide',
  'modal.official': 'Visitez le site officiel',
  
  // Language
  'language.en': 'Anglais',
  'language.fr': 'Français',
};

// Get translations based on selected language
const getTranslations = (language: Language) => {
  return language === 'en' ? enTranslations : frTranslations;
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
