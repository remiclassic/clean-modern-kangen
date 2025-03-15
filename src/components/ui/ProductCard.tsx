
import React from 'react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  price?: string;
  features?: string[];
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  description,
  price,
  features,
  className,
}) => {
  return (
    <div 
      className={cn(
        'group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-in-out border border-gray-100',
        className
      )}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="mb-4 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-kangen-500 mt-1">•</span>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {price && (
          <div className="text-lg font-semibold text-kangen-700 mb-4">
            {price}
          </div>
        )}
      </div>
    </div>
  );
};

export { ProductCard };
