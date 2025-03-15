
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div 
      className={cn(
        'group relative p-6 md:p-8 bg-white backdrop-blur-sm bg-opacity-70 rounded-xl border border-gray-100 hover:border-kangen-200 shadow-sm hover:shadow-md transition-all duration-300',
        className
      )}
    >
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-kangen-50 text-kangen-600 mb-4 group-hover:bg-kangen-100 transition-colors duration-300">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-kangen-700 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export { FeatureCard };
