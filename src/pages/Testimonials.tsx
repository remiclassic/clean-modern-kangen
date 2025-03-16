
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/context/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5,
    testimonial: 'Kangen Water has completely transformed my life! I have more energy, better digestion, and my skin has never looked better. It\'s amazing how something as simple as changing your water can make such a profound difference.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    rating: 5,
    testimonial: 'As an athlete, proper hydration is essential for my performance. Since switching to Kangen Water, my recovery time has decreased significantly, and I\'ve noticed improved endurance during my workouts. I wouldn\'t go back to regular water!'
  },
  {
    id: 3,
    name: 'Jennifer Rodriguez',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    rating: 5,
    testimonial: 'I was skeptical at first, but after experiencing the benefits of Kangen Water firsthand, I\'m a believer. My chronic acid reflux has improved dramatically, and my entire family loves the clean, refreshing taste.'
  },
  {
    id: 4,
    name: 'David Williams',
    location: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    rating: 5,
    testimonial: 'My wife convinced me to invest in a Kangen Water machine, and I have to admit, it\'s one of the best decisions we\'ve made for our health. The different pH levels are perfect for various uses around our home.'
  },
  {
    id: 5,
    name: 'Amanda Taylor',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    rating: 5,
    testimonial: 'Being a holistic nutrition coach, I always recommend Kangen Water to my clients. The alkaline properties support the body\'s natural balance, and I\'ve seen remarkable improvements in many health concerns among those who make the switch.'
  },
  {
    id: 6,
    name: 'Robert Kim',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    rating: 5,
    testimonial: 'After years of struggling with kidney stones, my urologist suggested trying alkaline water. Since installing my Kangen machine, I haven\'t had a single recurrence. Plus, the acidic water setting is fantastic for cleaning!'
  }
];

const frenchTestimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5,
    testimonial: 'L\'eau Kangen a complètement transformé ma vie! J\'ai plus d\'énergie, une meilleure digestion, et ma peau n\'a jamais été aussi belle. C\'est incroyable comment quelque chose d\'aussi simple que changer votre eau peut faire une différence aussi profonde.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    rating: 5,
    testimonial: 'En tant qu\'athlète, une hydratation adéquate est essentielle pour ma performance. Depuis que je suis passé à l\'eau Kangen, mon temps de récupération a considérablement diminué, et j\'ai remarqué une amélioration de mon endurance pendant mes entraînements. Je ne reviendrais pas à l\'eau ordinaire!'
  },
  {
    id: 3,
    name: 'Jennifer Rodriguez',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    rating: 5,
    testimonial: 'J\'étais sceptique au début, mais après avoir expérimenté les bienfaits de l\'eau Kangen par moi-même, j\'y crois maintenant. Mon reflux acide chronique s\'est considérablement amélioré, et toute ma famille adore le goût propre et rafraîchissant.'
  },
  {
    id: 4,
    name: 'David Williams',
    location: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    rating: 5,
    testimonial: 'Ma femme m\'a convaincu d\'investir dans une machine à eau Kangen, et je dois admettre que c\'est l\'une des meilleures décisions que nous ayons prises pour notre santé. Les différents niveaux de pH sont parfaits pour diverses utilisations dans notre maison.'
  },
  {
    id: 5,
    name: 'Amanda Taylor',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    rating: 5,
    testimonial: 'En tant que coach en nutrition holistique, je recommande toujours l\'eau Kangen à mes clients. Les propriétés alcalines soutiennent l\'équilibre naturel du corps, et j\'ai vu des améliorations remarquables dans de nombreux problèmes de santé chez ceux qui font le changement.'
  },
  {
    id: 6,
    name: 'Robert Kim',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    rating: 5,
    testimonial: 'Après des années de lutte contre les calculs rénaux, mon urologue m\'a suggéré d\'essayer l\'eau alcaline. Depuis l\'installation de ma machine Kangen, je n\'ai pas eu une seule récidive. De plus, le réglage de l\'eau acide est fantastique pour le nettoyage!'
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full flex flex-col"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex text-yellow-400 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
      
      <div className="flex-grow relative">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-kangen-100 opacity-50" />
        <p className="text-gray-700 italic pl-5">{testimonial.testimonial}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { t, language } = useLanguage();
  const items = language === 'en' ? testimonials : frenchTestimonials;

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
              {t('pages.testimonials.realResults')}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t('pages.testimonials.title')}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('pages.testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="mt-20 bg-kangen-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('pages.testimonials.shareExperience')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('pages.testimonials.shareExperienceText')}
                </p>
                <button className="bg-kangen-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-kangen-700 transition-colors">
                  {t('pages.testimonials.submitTestimonial')}
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
                  alt="Crystal clear water" 
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;
