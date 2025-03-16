
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

  return (
    <section id="products" className="bg-kangen-50/80 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
            {t('products.tag')}
          </span>
          <h2 className="section-title">{t('products.title')} <span className="gradient-text">{t('products.titleHighlight')}</span></h2>
          <p className="section-subtitle">
            {t('products.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {allProducts.map((product, index) => (
            <AlertDialog key={product.id}>
              <AnimatedProductCard 
                product={product}
                index={index}
                handleLearnMore={handleLearnMore}
              />
              <AlertDialogContent className="sm:max-w-[600px]">
                <AlertDialogHeader>
                  <AlertDialogTitle>{product.title} - {t('products.dialogTitle')}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {t('products.dialogDescription').replace('product', product.title)}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <ProductDetails product={product} onClose={() => setSelectedProduct(null)} />
                <AlertDialogFooter>
                  <AlertDialogCancel>{t('products.close')}</AlertDialogCancel>
                  <AlertDialogAction>{t('products.requestInfo')}</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
