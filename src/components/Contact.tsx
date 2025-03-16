
import React from 'react';
import { CustomButton } from './ui/custom-button';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-kangen-100 text-kangen-700 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="section-title">Ready to <span className="gradient-text">Transform Your Water</span>?</h2>
          <p className="section-subtitle">
            Contact our team of water specialists to learn more about Kangen Water® technology and find the perfect solution for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kangen-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kangen-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kangen-500 focus:border-transparent transition-all duration-200"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kangen-500 focus:border-transparent transition-all duration-200"
                  placeholder="I'm interested in Kangen Water"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kangen-500 focus:border-transparent transition-all duration-200"
                  placeholder="Please provide more information about..."
                ></textarea>
              </div>
              
              <CustomButton type="submit" size="lg" className="w-full">
                Send Message
                <ArrowRight className="ml-1 w-5 h-5" />
              </CustomButton>
            </form>
          </div>
          
          <div className="lg:pl-10 animate-fade-in-up" style={{animationDelay: "200ms"}}>
            <div className="bg-kangen-50 p-8 rounded-2xl border border-kangen-100">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-kangen-100 rounded-full flex items-center justify-center text-kangen-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">647-884-4427</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-kangen-100 rounded-full flex items-center justify-center text-kangen-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">info@kangenwater.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-kangen-100 rounded-full flex items-center justify-center text-kangen-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Contact</h4>
                    <p className="text-muted-foreground">Matthieu Couture<br />Toronto / Montreal, Canada</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-xl border border-gray-100">
                <h4 className="font-medium mb-2">Business Hours</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
