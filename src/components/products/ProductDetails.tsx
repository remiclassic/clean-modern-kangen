
import React from 'react';
import {
  Check,
  DownloadCloud
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Product } from '@/data/productData';
import { useLanguage } from '@/context/LanguageContext';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const { t } = useLanguage();
  
  return (
    <div className="p-4 max-h-[70vh] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          {product.gallery && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {product.gallery.map((img, i) => (
                <div key={i} className="bg-gray-100 p-2 rounded-lg h-20 flex items-center justify-center">
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
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{product.price}</h3>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {t('products.inStock')}
            </Badge>
          </div>
          
          <Separator className="my-4" />
          
          <div className="mb-6">
            <h4 className="font-medium text-lg mb-2">{t('products.features')}</h4>
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
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-medium mb-2">{t('products.warranty')}</h4>
            <p className="text-sm text-gray-600">{t('products.warrantyDescription')}</p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <Button className="w-full">
              {t('products.addToCart')}
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center">
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
