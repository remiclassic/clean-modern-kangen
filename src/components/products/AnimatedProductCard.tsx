
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/data/productData';
import { useLanguage } from '@/context/LanguageContext';
import { AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { BadgeCheck } from 'lucide-react';

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
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="relative">
        <div className="bg-gradient-to-b from-kangen-50 to-kangen-100/20 rounded-t-xl p-6 h-48 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {product.isBestSeller && (
          <div className="absolute top-4 right-4 bg-kangen-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
            <BadgeCheck className="w-3 h-3 mr-1" />
            {t('products.bestSeller')}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h3>
        <p className="text-gray-600 line-clamp-3 mb-4 text-sm">{product.description}</p>
        
        {product.features && product.features.length > 0 && (
          <ul className="mb-4 space-y-1">
            {product.features.slice(0, 2).map((feature, i) => (
              <li key={i} className="flex text-xs text-gray-600">
                <span className="text-kangen-500 mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <span className="font-bold text-lg text-kangen-700">{product.price}</span>
          <AlertDialogTrigger asChild>
            <button 
              onClick={() => handleLearnMore(product)}
              className="px-4 py-2 bg-kangen-600 text-white rounded-lg hover:bg-kangen-700 transition-colors text-sm font-medium"
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
