
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
import { Button } from "@/components/ui/button";
import { CustomButton } from './ui/custom-button';
import { useLanguage } from '@/context/LanguageContext';

interface GetStartedModalProps {
  children: React.ReactNode;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ children }) => {
  const { t } = useLanguage();
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-kangen-600">{t('modal.title')}</DialogTitle>
          <DialogDescription className="pt-2">
            {t('modal.description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <Link to="/business-opportunity" className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-kangen-50 rounded-full mr-4">
              <Users className="h-6 w-6 text-kangen-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{t('modal.distributor')}</h3>
              <p className="text-sm text-gray-500">{t('modal.distributorDescription')}</p>
            </div>
          </Link>
          
          <a href="#contact" className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-kangen-50 rounded-full mr-4">
              <Phone className="h-6 w-6 text-kangen-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{t('modal.demo')}</h3>
              <p className="text-sm text-gray-500">{t('modal.demoDescription')}</p>
            </div>
          </a>
          
          <a href="mailto:info@kangenwater.com" className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="p-2 bg-kangen-50 rounded-full mr-4">
              <Mail className="h-6 w-6 text-kangen-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{t('modal.contact')}</h3>
              <p className="text-sm text-gray-500">{t('modal.contactDescription')}</p>
            </div>
          </a>
        </div>
        
        <div className="flex flex-col space-y-2 mt-2">
          <p className="text-xs text-gray-500 text-center">
            {t('modal.support')} <a href="#contact" className="text-kangen-600 hover:underline">{t('modal.getSupport')}</a>
          </p>
          <div className="flex items-center justify-center">
            <a 
              href="https://www.kangenwater.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-gray-500 hover:text-kangen-600"
            >
              {t('modal.official')} <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;
