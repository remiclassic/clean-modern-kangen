
import React from 'react';
import { Slider } from '../ui/slider';
import { CustomButton } from '../ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { motion } from 'framer-motion';

interface ProductFilterProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  resetFilters: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  priceRange,
  setPriceRange,
  selectedCategory,
  setSelectedCategory,
  resetFilters
}) => {
  return (
    <motion.div 
      className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-3">
          <h3 className="font-medium text-gray-800">Price Range</h3>
          <div className="px-2">
            <Slider
              value={[priceRange[0], priceRange[1]]}
              min={1000}
              max={6000}
              step={100}
              onValueChange={(value) => setPriceRange([value[0], value[1]])}
              className="mt-6"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-medium text-gray-800">Category</h3>
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="compact">Compact</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <CustomButton 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters} 
            className="w-full"
          >
            Reset Filters
          </CustomButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductFilter;
