
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { User, MapPin, FileText, Download, Sparkles } from 'lucide-react';

// List of names to randomly choose from
const names = [
  'John D.', 'Maria S.', 'Robert T.', 'Sarah L.', 'Michael P.', 'Emma W.',
  'David H.', 'Sophia G.', 'Daniel K.', 'Olivia F.', 'Thomas R.', 'Ava J.',
  'James M.', 'Isabella C.', 'Joseph B.', 'Mia V.', 'Charles N.', 'Charlotte Q.',
  'Andrew Z.', 'Amelia Y.', 'William U.', 'Harper I.', 'Ryan O.', 'Evelyn P.'
];

// List of locations to randomly choose from
const locations = [
  'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ',
  'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'Austin, TX',
  'San Francisco, CA', 'Seattle, WA', 'Denver, CO', 'Boston, MA', 'Miami, FL',
  'Atlanta, GA', 'Portland, OR', 'Las Vegas, NV', 'Orlando, FL', 'Charlotte, NC'
];

// List of actions the user might have taken
const actions = [
  {
    text: "has requested the Alkaline Body Balance eBook!",
    icon: <FileText className="w-4 h-4" />
  },
  {
    text: "just downloaded the Water Health Guide!",
    icon: <Download className="w-4 h-4" />
  },
  {
    text: "ordered a K8 Kangen Water machine!",
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    text: "signed up for a free water demo!",
    icon: <User className="w-4 h-4" />
  },
  {
    text: "started their Kangen Water journey!",
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    text: "requested more information about Kangen Water!",
    icon: <FileText className="w-4 h-4" />
  }
];

// Function to get a random element from an array
const getRandomElement = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const EngagementToaster: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Show first notification after a short delay on initial load
    const initialTimeout = setTimeout(() => {
      showRandomEngagementToast();
    }, 3000);
    
    // Set up recurring notifications
    const interval = setInterval(() => {
      showRandomEngagementToast();
    }, 45000 + Math.random() * 30000); // Random interval between 45-75 seconds
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);
  
  const showRandomEngagementToast = () => {
    const randomName = getRandomElement(names);
    const randomLocation = getRandomElement(locations);
    const randomAction = getRandomElement(actions);
    
    toast(
      <div className="flex items-start">
        <div className="bg-kangen-100 rounded-full p-2 mr-3">
          {randomAction.icon}
        </div>
        <div>
          <p className="font-medium">{randomName} {randomAction.text}</p>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <MapPin className="w-3 h-3 mr-1" /> {randomLocation}
          </div>
        </div>
      </div>,
      {
        duration: 5000,
        position: 'bottom-left',
      }
    );
  };
  
  // Only run on client-side
  if (!mounted) return null;
  
  return null; // This component doesn't render anything directly
};
