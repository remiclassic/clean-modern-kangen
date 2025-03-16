
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Users, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/shadcn-button";
import { CustomButton } from './ui/Button';

interface GetStartedModalProps {
  children: React.ReactNode;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-kangen-600">Join the Kangen Water Family</DialogTitle>
          <DialogDescription className="pt-2">
            Choose how you would like to get started with Kangen Water
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <Link to="/business-opportunity" className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-kangen-50 rounded-full mr-4">
              <Users className="h-6 w-6 text-kangen-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Become a Distributor</h3>
              <p className="text-sm text-gray-500">Join our business opportunity and build your own Kangen Water business</p>
            </div>
          </Link>
          
          <a href="#contact" className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-kangen-50 rounded-full mr-4">
              <Phone className="h-6 w-6 text-kangen-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Request a Demo</h3>
              <p className="text-sm text-gray-500">Schedule a demonstration to see Kangen Water in action</p>
            </div>
          </a>
          
          <a href="mailto:info@kangenwater.com" className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-kangen-50 rounded-full mr-4">
              <Mail className="h-6 w-6 text-kangen-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Contact Us</h3>
              <p className="text-sm text-gray-500">Email us directly with any questions about our products</p>
            </div>
          </a>
        </div>
        
        <div className="flex flex-col space-y-2 mt-2">
          <p className="text-xs text-gray-500 text-center">
            Already a customer? <a href="#contact" className="text-kangen-600 hover:underline">Get support</a>
          </p>
          <div className="flex items-center justify-center">
            <a 
              href="https://www.kangenwater.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-gray-500 hover:text-kangen-600"
            >
              Visit official website <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;
