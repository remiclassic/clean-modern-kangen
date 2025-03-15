
import React, { useState } from 'react';
import { ProductCard } from './ui/ProductCard';
import { CustomButton } from './ui/Button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';

const products = [
  {
    id: 1,
    title: 'K8',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    description: 'Our premium model with the most plate capability for maximum antioxidant potential.',
    features: ['8 Platinum-Coated Plates', '5 Water Settings', 'Voice-Guided Operation'],
    price: 'From $4,980',
    videoUrl: 'https://www.youtube.com/embed/XmVUg3ZviGE'
  },
  {
    id: 2,
    title: 'SD501',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
    description: 'The flagship model that offers exceptional performance for families and businesses.',
    features: ['7 Solid Platinum-Coated Plates', 'LCD Display Panel', 'Automatic Cleaning'],
    price: 'From $3,980',
    videoUrl: 'https://www.youtube.com/embed/gjvZX-ufm5E'
  },
  {
    id: 3,
    title: 'R',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Compact design for smaller spaces while delivering exceptional performance.',
    features: ['5 Platinum-Coated Plates', 'LCD Display', 'Energy Saving Mode'],
    price: 'From $2,980',
    videoUrl: 'https://www.youtube.com/embed/QLWikx3TzZM'
  }
];

const ProductDetails = ({ product, onClose }) => (
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleLearnMore = (product) => {
    setSelectedProduct(product);
  };
  
  const handleViewAllProducts = () => {
    // Scroll to products section and show a brief highlight animation
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Add a highlight class temporarily
      productsSection.classList.add('highlight-section');
      setTimeout(() => {
        productsSection.classList.remove('highlight-section');
      }, 1000);
    }
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
          {products.map((product) => (
            <div key={product.id}>
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
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <CustomButton variant="secondary" size="lg" onClick={handleViewAllProducts}>
            View All Products
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Products;
