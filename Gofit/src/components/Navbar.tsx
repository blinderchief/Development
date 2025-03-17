
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4",
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="w-8 h-8 text-gofit-500" />
          <span className="font-semibold text-xl">GoFit AI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="space-x-6 font-medium">
            <a href="#features" className="hover:text-gofit-500 transition-colors">Features</a>
            <a href="#recipes" className="hover:text-gofit-500 transition-colors">Recipes</a>
            <a href="#sustainability" className="hover:text-gofit-500 transition-colors">Sustainability</a>
            <a href="#pricing" className="hover:text-gofit-500 transition-colors">Pricing</a>
          </div>
          <Button>Try For Free</Button>
        </div>
        
        <button 
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 top-16 bg-white dark:bg-gray-900 transition-transform duration-300 transform md:hidden z-40",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col p-6 space-y-6 text-lg">
          <a 
            href="#features" 
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#recipes" 
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Recipes
          </a>
          <a 
            href="#sustainability" 
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Sustainability
          </a>
          <a 
            href="#pricing" 
            className="py-2 border-b border-gray-100 dark:border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <Button className="w-full mt-4">Try For Free</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
