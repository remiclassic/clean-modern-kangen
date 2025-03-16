
import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../ui/ProductCard';
import { CustomButton } from '../ui/Button';
import { Award } from 'lucide-react';
import { AlertDialogTrigger } from '../ui/alert-dialog';
import type { Product } from '@/data/productData';

interface AnimatedProductCardProps {
  product: Product;
  index: number;
  handleLearnMore: (product: Product) => void;
  isVisible?: boolean;
}

const AnimatedProductCard: React.FC<AnimatedProductCardProps> = ({ 
  product, 
  index, 
  handleLearnMore,
  isVisible = true 
}) => {
  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div 
      key={product.id}
      custom={index}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      whileHover="hover"
      variants={productVariants}
      className={product.isBestSeller ? "transform relative z-10" : ""}
    >
      {product.isBestSeller && (
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-kangen-500 to-kangen-700 text-white py-1 px-3 rounded-full flex items-center gap-1 shadow-md z-20 transform rotate-3">
          <Award className="h-4 w-4" />
          <span className="text-sm font-medium">Best Seller</span>
        </div>
      )}
      
      <AlertDialogTrigger asChild>
        <ProductCard
          title={product.title}
          image={product.image}
          description={product.description}
          features={product.features}
          price={product.price}
          className={`${product.isBestSeller ? "ring-2 ring-kangen-500 shadow-lg" : ""}`}
          action={
            <CustomButton 
              variant="outline" 
              size="sm" 
              className="w-full mt-4"
              onClick={() => handleLearnMore(product)}
            >
              Learn More
            </CustomButton>
          }
        />
      </AlertDialogTrigger>
    </motion.div>
  );
};

export default AnimatedProductCard;
