
import React, { useState } from 'react';
import { ProductCard } from './ui/ProductCard';
import { CustomButton } from './ui/Button';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'K8',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    description: 'Our premium model with the most plate capability for maximum antioxidant potential.',
    features: ['8 Platinum-Coated Plates', '5 Water Settings', 'Voice-Guided Operation'],
    price: 'From $4,980',
    videoUrl: 'https://www.youtube.com/embed/XmVUg3ZviGE',
    isBestSeller: true
  },
  {
    id: 2,
    title: 'SD501',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
    description: 'The flagship model that offers exceptional performance for families and businesses.',
    features: ['7 Solid Platinum-Coated Plates', 'LCD Display Panel', 'Automatic Cleaning'],
    price: 'From $3,980',
    videoUrl: 'https://www.youtube.com/embed/gjvZX-ufm5E',
    isBestSeller: false
  },
  {
    id: 3,
    title: 'R',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Compact design for smaller spaces while delivering exceptional performance.',
    features: ['5 Platinum-Coated Plates', 'LCD Display', 'Energy Saving Mode'],
    price: 'From $2,980',
    videoUrl: 'https://www.youtube.com/embed/QLWikx3TzZM',
    isBestSeller: false
  }
];

// Additional products that will be shown when expanded
const additionalProducts = [
  {
    id: 4,
    title: 'SD501 Platinum',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    description: 'A luxurious upgrade to our flagship model with premium design elements.',
    features: ['7 Solid Platinum-Coated Plates', 'Premium Design', 'Auto-Filter Replacement Sensor'],
    price: 'From $4,280',
    videoUrl: 'https://www.youtube.com/embed/gjvZX-ufm5E',
    isBestSeller: false
  },
  {
    id: 5,
    title: 'JRIV',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    description: 'Our most portable unit, perfect for travel or small living spaces.',
    features: ['3 Platinum-Coated Plates', 'Compact & Portable', 'Single Water Type'],
    price: 'From $1,980',
    videoUrl: 'https://www.youtube.com/embed/QLWikx3TzZM',
    isBestSeller: false
  },
  {
    id: 6,
    title: 'Super 501',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    description: 'Commercial-grade water ionizer designed for high-volume business applications.',
    features: ['12 Platinum-Coated Plates', 'High-Volume Output', 'Commercial Grade Components'],
    price: 'From $5,980',
    videoUrl: 'https://www.youtube.com/embed/XmVUg3ZviGE',
    isBestSeller: false
  }
];

interface ProductDetailsProps {
  product: (typeof products[0] | typeof additionalProducts[0]);
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => (
  <div className="space-y-6">
    <div className="aspect-video rounded-lg overflow-hidden">
      <iframe 
        className="w-full h-full" 
        src={product.videoUrl}
        title={`${product.title} Video`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-4">{product.title} Features</h3>
      <ul className="space-y-2">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-kangen-500 mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <p>
      The {product.title} is designed with state-of-the-art technology to provide you with the healthiest water possible.
      It features a self-cleaning system and delivers various types of water for different uses in your daily life.
    </p>
  </div>
);

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products[0] | typeof additionalProducts[0]) | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleLearnMore = (product: typeof products[0] | typeof additionalProducts[0]) => {
    setSelectedProduct(product);
  };
  
  const handleViewAllProducts = () => {
    setIsExpanded(!isExpanded);
  };

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="products" className="bg-kangen-50/80 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
            Premium Selection
          </span>
          <h2 className="section-title">Discover Our <span className="gradient-text">Product Line</span></h2>
          <p className="section-subtitle">
            Explore our range of innovative water ionizers designed to transform ordinary tap water into extraordinary hydrogen-rich alkaline water
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={productVariants}
              className={product.isBestSeller ? "transform scale-105 relative z-10" : ""}
            >
              {product.isBestSeller && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-kangen-500 to-kangen-700 text-white py-1 px-3 rounded-full flex items-center gap-1 shadow-md z-20 transform rotate-3">
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-medium">Best Seller</span>
                </div>
              )}
              
              <ProductCard
                title={product.title}
                image={product.image}
                description={product.description}
                features={product.features}
                price={product.price}
                className={`animate-fade-in-up ${product.isBestSeller ? "ring-2 ring-kangen-500 shadow-lg" : ""}`}
              />
              <div className="mt-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <CustomButton 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleLearnMore(product)}
                    >
                      Learn More
                    </CustomButton>
                  </AlertDialogTrigger>
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
              </div>
            </motion.div>
          ))}
        </div>
        
        <Collapsible
          open={isExpanded}
          onOpenChange={setIsExpanded}
          className="w-full"
        >
          <CollapsibleContent className="overflow-hidden transition-all duration-500 ease-in-out">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-8 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isExpanded ? 1 : 0, 
                height: isExpanded ? "auto" : 0,
                transition: { duration: 0.5, ease: "easeInOut" }
              }}
            >
              {additionalProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  custom={index}
                  initial="hidden"
                  animate={isExpanded ? "visible" : "hidden"}
                  variants={productVariants}
                >
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    features={product.features}
                    price={product.price}
                    className="animate-fade-in-up"
                  />
                  <div className="mt-4">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <CustomButton 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={() => handleLearnMore(product)}
                        >
                          Learn More
                        </CustomButton>
                      </AlertDialogTrigger>
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
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </CollapsibleContent>
          
          <div className="text-center">
            <CollapsibleTrigger asChild>
              <CustomButton 
                variant="secondary" 
                size="lg" 
                onClick={handleViewAllProducts}
                className="flex items-center gap-2 transition-all duration-300 hover:bg-kangen-100"
              >
                {isExpanded ? 'Hide Products' : 'View All Products'}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </CustomButton>
            </CollapsibleTrigger>
          </div>
        </Collapsible>
      </div>
    </section>
  );
};

export default Products;
