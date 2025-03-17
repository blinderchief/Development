
import React from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Check, ShoppingBasket } from 'lucide-react';
import FadeIn from './ui/animation/FadeIn';

const ingredients = [
  { name: "Spinach", detected: true },
  { name: "Quinoa", detected: true },
  { name: "Chickpeas", detected: true },
  { name: "Sweet Potato", detected: true },
  { name: "Bell Pepper", detected: false },
  { name: "Cherry Tomatoes", detected: true },
  { name: "Avocado", detected: false },
  { name: "Lemon", detected: true },
];

const PantryScanner = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-gofit-50/50 dark:bg-gofit-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl">
                <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center space-x-2">
                    <ShoppingBasket className="w-5 h-5 text-gofit-500" />
                    <h3 className="font-medium">Pantry Scanner</h3>
                  </div>
                </div>
                
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=2487&auto=format&fit=crop" 
                    alt="Pantry ingredients" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Scanning overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="w-3/4 h-3/4 border-2 border-white/70 rounded-lg relative">
                      <div className="absolute top-0 left-0 w-full animate-pulse-subtle">
                        <div className="h-0.5 bg-gofit-400/80 rounded-full"></div>
                      </div>
                    </div>
                    <Button size="lg" className="mt-6">
                      <Camera className="mr-2 h-5 w-5" /> Scan Ingredients
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-medium mb-4">Detected Ingredients</h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {ingredients.map((ingredient, index) => (
                      <div 
                        key={index}
                        className={`flex items-center p-2 rounded-lg ${
                          ingredient.detected 
                            ? 'bg-gofit-100 dark:bg-gofit-900/20' 
                            : 'bg-gray-100 dark:bg-gray-800'
                        }`}
                      >
                        {ingredient.detected && (
                          <Check className="w-4 h-4 text-gofit-600 mr-2" />
                        )}
                        <span className={ingredient.detected ? 'font-medium' : 'text-muted-foreground'}>
                          {ingredient.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Scan Your Pantry, <br />
              <span className="text-gradient">Reduce Food Waste</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Our advanced image recognition technology scans your pantry items 
              with 85% accuracy, suggesting delicious recipes based on what you 
              already have at home.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-gofit-100 dark:bg-gofit-900 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-gofit-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Reduce Food Waste</h4>
                  <p className="text-muted-foreground">Save up to $50 per month by using ingredients before they expire</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-gofit-100 dark:bg-gofit-900 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-gofit-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Smart Suggestions</h4>
                  <p className="text-muted-foreground">Get recipe ideas based on what's already in your kitchen</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-gofit-100 dark:bg-gofit-900 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-gofit-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Shopping List Integration</h4>
                  <p className="text-muted-foreground">Generate shopping lists for ingredients you need to complete recipes</p>
                </div>
              </div>
            </div>
            
            <Button size="lg">Try Pantry Scanner</Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PantryScanner;
