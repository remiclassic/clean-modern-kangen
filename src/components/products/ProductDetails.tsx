
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';
import type { Product } from '@/data/productData';
import { useLanguage } from '@/context/LanguageContext';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="aspect-video rounded-lg overflow-hidden"
        variants={itemVariants}
      >
        <iframe 
          className="w-full h-full" 
          src={product.videoUrl}
          title={`${product.title} Video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
      
      <div className="flex justify-between items-center">
        <motion.h3 
          className="text-xl font-semibold" 
          variants={itemVariants}
        >
          {product.title} {t('products.features')}
        </motion.h3>
        <motion.div 
          className="flex items-center text-yellow-500" 
          variants={itemVariants}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-current" />
          ))}
          <span className="ml-1 text-sm text-gray-600">5.0</span>
        </motion.div>
      </div>
      
      <motion.ul className="space-y-2" variants={itemVariants}>
        {product.features.map((feature, idx) => (
          <motion.li 
            key={idx} 
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <span className="text-kangen-500 mt-1">•</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
      
      <motion.p variants={itemVariants}>
        {t('products.description2').replace('product', product.title)}
      </motion.p>
      
      <motion.div 
        className="bg-kangen-50 p-4 rounded-lg border border-kangen-100 flex items-center gap-3"
        variants={itemVariants}
      >
        <ShieldCheck className="h-5 w-5 text-kangen-500" />
        <div>
          <p className="text-sm font-medium">{t('products.warranty')}</p>
          <p className="text-xs text-gray-600">{t('products.warrantyDescription')}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetails;
