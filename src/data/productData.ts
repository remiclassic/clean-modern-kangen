
export interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  features: string[];
  price: string;
  videoUrl: string;
  isBestSeller: boolean;
  priceValue?: number;
  category?: 'premium' | 'standard' | 'compact';
  gallery?: string[];
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    title: 'K8',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    description: 'Our premium model with the most plate capability for maximum antioxidant potential.',
    features: ['8 Platinum-Coated Plates', '5 Water Settings', 'Voice-Guided Operation'],
    price: 'From $4,980',
    priceValue: 4980,
    videoUrl: 'https://www.youtube.com/embed/XmVUg3ZviGE',
    isBestSeller: true,
    category: 'premium'
  },
  {
    id: 2,
    title: 'SD501',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
    description: 'The flagship model that offers exceptional performance for families and businesses.',
    features: ['7 Solid Platinum-Coated Plates', 'LCD Display Panel', 'Automatic Cleaning'],
    price: 'From $3,980',
    priceValue: 3980,
    videoUrl: 'https://www.youtube.com/embed/gjvZX-ufm5E',
    isBestSeller: false,
    category: 'premium'
  },
  {
    id: 3,
    title: 'R',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Compact design for smaller spaces while delivering exceptional performance.',
    features: ['5 Platinum-Coated Plates', 'LCD Display', 'Energy Saving Mode'],
    price: 'From $2,980',
    priceValue: 2980,
    videoUrl: 'https://www.youtube.com/embed/QLWikx3TzZM',
    isBestSeller: false,
    category: 'standard'
  }
];

export const additionalProducts: Product[] = [
  {
    id: 4,
    title: 'SD501 Platinum',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    description: 'A luxurious upgrade to our flagship model with premium design elements.',
    features: ['7 Solid Platinum-Coated Plates', 'Premium Design', 'Auto-Filter Replacement Sensor'],
    price: 'From $4,280',
    priceValue: 4280,
    videoUrl: 'https://www.youtube.com/embed/gjvZX-ufm5E',
    isBestSeller: false,
    category: 'premium'
  },
  {
    id: 5,
    title: 'JRIV',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    description: 'Our most portable unit, perfect for travel or small living spaces.',
    features: ['3 Platinum-Coated Plates', 'Compact & Portable', 'Single Water Type'],
    price: 'From $1,980',
    priceValue: 1980,
    videoUrl: 'https://www.youtube.com/embed/QLWikx3TzZM',
    isBestSeller: false,
    category: 'compact'
  },
  {
    id: 6,
    title: 'Super 501',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    description: 'Commercial-grade water ionizer designed for high-volume business applications.',
    features: ['12 Platinum-Coated Plates', 'High-Volume Output', 'Commercial Grade Components'],
    price: 'From $5,980',
    priceValue: 5980,
    videoUrl: 'https://www.youtube.com/embed/XmVUg3ZviGE',
    isBestSeller: false,
    category: 'premium'
  }
];

export const allProducts = [...featuredProducts, ...additionalProducts];

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id);
};
