
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/data/productData';
import { useLanguage } from '@/context/LanguageContext';
import { AlertDialogTrigger } from '@/components/ui/alert-dialog';

interface AnimatedProductCardProps {
  product: Product;
  index: number;
  handleLearnMore: (product: Product) => void;
}

const AnimatedProductCard: React.FC<AnimatedProductCardProps> = ({ 
  product, 
  index,
  handleLearnMore
}) => {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1
      }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 line-clamp-3 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{product.price}</span>
          <AlertDialogTrigger asChild>
            <button 
              onClick={() => handleLearnMore(product)}
              className="px-4 py-2 bg-kangen-600 text-white rounded hover:bg-kangen-700 transition-colors"
            >
              {t('products.learnMore')}
            </button>
          </AlertDialogTrigger>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedProductCard;
