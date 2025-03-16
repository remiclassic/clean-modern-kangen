
import React from 'react';
import { motion } from 'framer-motion';
import type { Product } from '@/data/productData';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
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
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold mb-4">{product.title} Features</h3>
        <ul className="space-y-2">
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
        </ul>
      </motion.div>
      <motion.p variants={itemVariants}>
        The {product.title} is designed with state-of-the-art technology to provide you with the healthiest water possible.
        It features a self-cleaning system and delivers various types of water for different uses in your daily life.
      </motion.p>
    </motion.div>
  );
};

export default ProductDetails;
