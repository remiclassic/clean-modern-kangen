
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { allProducts, type Product } from '@/data/productData';
import AnimatedProductCard from './products/AnimatedProductCard';
import ProductDetails from './products/ProductDetails';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const handleLearnMore = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="products" className="bg-kangen-50/80 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
            Premium Selection
          </span>
          <h2 className="section-title">Discover Our <span className="gradient-text">Product Line</span></h2>
          <p className="section-subtitle">
            Explore our range of innovative water ionizers designed to transform ordinary tap water into extraordinary hydrogen-rich alkaline water
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
                  <AlertDialogTitle>{product.title} - Kangen Water System</AlertDialogTitle>
                  <AlertDialogDescription>
                    Get to know our premium {product.title} water ionizer.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <ProductDetails product={product} onClose={() => setSelectedProduct(null)} />
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                  <AlertDialogAction>Request Info</AlertDialogAction>
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
