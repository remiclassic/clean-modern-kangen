
import React, { useState } from 'react';
import { Slider } from '../ui/slider';
import { CustomButton } from '../ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { motion } from 'framer-motion';
import { Check, X, ChevronDown } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

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
  const [isAdvancedFilterOpen, setIsAdvancedFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div 
      className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10"
            />
            {searchTerm && (
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchTerm('')}
              >
                <X className="h-4 w-4" />
              </button>
            )}
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
      
      <div className="mt-4">
        <button 
          onClick={() => setIsAdvancedFilterOpen(!isAdvancedFilterOpen)}
          className="text-sm text-kangen-600 hover:text-kangen-800 font-medium flex items-center"
        >
          {isAdvancedFilterOpen ? 'Hide' : 'Show'} Advanced Filters
          <motion.div
            animate={{ rotate: isAdvancedFilterOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-1"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </button>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isAdvancedFilterOpen ? 'auto' : 0,
            opacity: isAdvancedFilterOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t mt-4">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="space-y-2">
                <h3 className="font-medium text-gray-800 text-sm">Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="voice-guided" />
                    <Label htmlFor="voice-guided">Voice Guided</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="auto-cleaning" />
                    <Label htmlFor="auto-cleaning">Auto Cleaning</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-gray-800 text-sm">Water Types</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="multi-type" />
                    <Label htmlFor="multi-type">Multiple Water Types</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="single-type" />
                    <Label htmlFor="single-type">Single Water Type</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-gray-800 text-sm">Size</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="portable" />
                    <Label htmlFor="portable">Portable</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="countertop" />
                    <Label htmlFor="countertop">Countertop</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductFilter;
