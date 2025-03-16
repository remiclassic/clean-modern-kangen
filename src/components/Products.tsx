
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { allProducts, type Product } from '@/data/productData';
import AnimatedProductCard from './products/AnimatedProductCard';
import ProductDetails from './products/ProductDetails';
import { useLanguage } from '@/context/LanguageContext';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { t } = useLanguage();
  
  const handleLearnMore = (product: Product) => {
    setSelectedProduct(product);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="products" className="bg-gradient-to-b from-white to-kangen-50/50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
            {t('products.tag')}
          </span>
          <h2 className="section-title">{t('products.title')} <span className="gradient-text">{t('products.titleHighlight')}</span></h2>
          <p className="section-subtitle max-w-4xl">
            {t('products.description')}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {allProducts.map((product, index) => (
            <AlertDialog key={product.id}>
              <AnimatedProductCard 
                product={product}
                index={index}
                handleLearnMore={handleLearnMore}
              />
              <AlertDialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
                <AlertDialogHeader className="p-6 pb-0">
                  <AlertDialogTitle className="text-2xl">{product.title} - {t('products.dialogTitle')}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {t('products.dialogDescription').replace('product', product.title)}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <ProductDetails product={product} onClose={() => setSelectedProduct(null)} />
                <AlertDialogFooter className="p-4 border-t bg-gray-50">
                  <AlertDialogCancel>{t('products.close')}</AlertDialogCancel>
                  <AlertDialogAction className="bg-kangen-600 hover:bg-kangen-700">{t('products.requestInfo')}</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
