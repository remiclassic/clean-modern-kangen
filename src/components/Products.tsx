
import React from 'react';
import { ProductCard } from './ui/ProductCard';
import { CustomButton } from './ui/Button';

const products = [
  {
    id: 1,
    title: 'K8',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Our premium model with the most plate capability for maximum antioxidant potential.',
    features: ['8 Platinum-Coated Plates', '5 Water Settings', 'Voice-Guided Operation'],
    price: 'From $4,980'
  },
  {
    id: 2,
    title: 'SD501',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'The flagship model that offers exceptional performance for families and businesses.',
    features: ['7 Solid Platinum-Coated Plates', 'LCD Display Panel', 'Automatic Cleaning'],
    price: 'From $3,980'
  },
  {
    id: 3,
    title: 'R',
    image: 'https://images.unsplash.com/photo-1533422902779-aff35862e462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Compact design for smaller spaces while delivering exceptional performance.',
    features: ['5 Platinum-Coated Plates', 'LCD Display', 'Energy Saving Mode'],
    price: 'From $2,980'
  }
];

const Products: React.FC = () => {
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
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              features={product.features}
              price={product.price}
              className="animate-fade-in-up"
            />
          ))}
        </div>
        
        <div className="text-center">
          <CustomButton variant="secondary" size="lg">
            View All Products
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Products;
