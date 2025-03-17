
import React from 'react';
import FadeIn from './ui/animation/FadeIn';
import { Leaf, Droplet, TrendingDown } from 'lucide-react';

const SustainabilityMetrics = () => {
  return (
    <section id="sustainability" className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Your Sustainability Impact
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            GoFit AI helps you make eco-friendly food choices with real measurable impact
          </p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn delay={100}>
            <div className="glass-card rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-16 h-16 bg-gofit-100 dark:bg-gofit-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-gofit-600" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">20%</h3>
              <p className="text-lg font-medium mb-4">Carbon Reduction</p>
              <p className="text-muted-foreground">
                Choosing local and seasonal ingredients dramatically reduces the carbon footprint of your meals
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="glass-card rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-16 h-16 bg-gofit-100 dark:bg-gofit-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-gofit-600" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">85%</h3>
              <p className="text-lg font-medium mb-4">Food Waste Reduction</p>
              <p className="text-muted-foreground">
                Our pantry scanner helps you use ingredients you already have, preventing food from being thrown away
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="glass-card rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
              <div className="w-16 h-16 bg-gofit-100 dark:bg-gofit-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplet className="w-8 h-8 text-gofit-600" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">1,000+</h3>
              <p className="text-lg font-medium mb-4">Gallons of Water Saved</p>
              <p className="text-muted-foreground">
                Plant-forward recipes and reduced food waste conserve water used in food production
              </p>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={400}>
          <div className="mt-20 glass-card rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Join Our Eco-Conscious Community</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Together, our users have saved over 50,000 pounds of food from landfills and reduced carbon emissions equivalent to taking 500 cars off the road.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-gofit-600">15,000+</p>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gofit-600">45%</p>
                    <p className="text-sm text-muted-foreground">Average Sustainability Improvement</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop" 
                  alt="Sustainable food" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gofit-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SustainabilityMetrics;
