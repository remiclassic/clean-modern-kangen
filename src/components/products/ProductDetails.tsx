
import React, { useState } from 'react';
import {
  Check,
  DownloadCloud,
  Star,
  ShoppingCart
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Product } from '@/data/productData';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(product.image);
  
  return (
    <div className="p-4 max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-kangen-50 to-white rounded-lg p-6 h-64 flex items-center justify-center mb-4 border border-kangen-100"
          >
            <img 
              src={selectedImage} 
              alt={product.title} 
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
          
          {product.gallery && (
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div 
                className={`bg-gray-100 p-2 rounded-lg h-16 flex items-center justify-center cursor-pointer border-2 ${selectedImage === product.image ? 'border-kangen-500' : 'border-transparent'}`}
                onClick={() => setSelectedImage(product.image)}
              >
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              {product.gallery.map((img, i) => (
                <div 
                  key={i} 
                  className={`bg-gray-100 p-2 rounded-lg h-16 flex items-center justify-center cursor-pointer border-2 ${selectedImage === img ? 'border-kangen-500' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${product.title} gallery ${i + 1}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">152 {t('products.reviews')}</span>
              </div>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 font-medium">
              {t('products.inStock')}
            </Badge>
          </div>
          
          <div className="mb-4">
            <span className="text-2xl font-bold text-kangen-700">{product.price}</span>
            {product.isBestSeller && (
              <Badge variant="secondary" className="ml-2 bg-kangen-100 text-kangen-700">
                {t('products.bestSeller')}
              </Badge>
            )}
          </div>
          
          <Separator className="my-4" />
          
          <div className="mb-6">
            <h4 className="font-medium text-lg mb-3 text-gray-800">{t('products.features')}</h4>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <p className="text-gray-700 mb-6">
            {t('products.description2')}
          </p>
          
          <div className="bg-kangen-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium mb-2 text-gray-800">{t('products.warranty')}</h4>
            <p className="text-sm text-gray-600">{t('products.warrantyDescription')}</p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <Button className="w-full" size="lg">
              <ShoppingCart className="mr-2 h-4 w-4" />
              {t('products.addToCart')}
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <DownloadCloud className="h-4 w-4 mr-2" />
              {t('products.downloadBrochure')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
